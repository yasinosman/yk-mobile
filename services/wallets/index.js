import { fetchCollectionByName, updateDocument } from '../database';
import { db } from '../../firebase';
import { checkIfAccountExists } from '../accounts';
import { createOrder } from '../orders';
import { convertCurrency } from '../../lib/utils';

/**
 *  Nakit hesabından kripto cüzdana kripto varlık alırken kullanılır.
 * @param {string} cashAccountId Nakit Hesap ID'si
 * @param {number} cashAmount Nakit miktarı
 * @param {string} cryptoWalletId Kripto Cüzdan ID'si
 * @param {string} cryptoCurrency Alınacak kripto varlık türü
 * @param {number} calculatedCryptoAmount cashAmount'a göre hesaplanan, alınacak kripto miktarı
 */
export function buyCryptoFromCashAccount(
  cashAccountId,
  cashAmount,
  cryptoWalletId,
  cryptoCurrency,
  calculatedCryptoAmount
) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountData = await checkIfAccountExists(cashAccountId);
      const walletData = await checkIfWalletExists(cryptoWalletId);

      const requestedAmount = parseFloat(cashAmount);

      if (parseFloat(accountData.available_balance) < requestedAmount) {
        return reject('Yetersiz bakiye');
      }

      //Withdraw
      await updateDocument('accounts', cashAccountId, {
        available_balance: (
          parseFloat(accountData.available_balance) - requestedAmount
        ).toFixed(6),
      });

      //Deposit
      await updateDocument('wallets', cryptoWalletId, {
        assets: walletData.assets.map(asset =>
          asset.currency === cryptoCurrency
            ? {
                ...asset,
                amount: (
                  parseFloat(asset.amount) + parseFloat(calculatedCryptoAmount)
                ).toFixed(6),
              }
            : asset
        ),
      });

      await createOrder(
        `${cryptoCurrency}/${accountData.currency}`,
        calculatedCryptoAmount,
        convertCurrency(cryptoCurrency, 1, accountData.currency),
        'buy',
        accountData.currency
      );

      return resolve('Al/Sat işlemi başarılı.');
    } catch (error) {
      return reject(error.message);
    }
  });
}

/**
 *  Kripto cüzdanından nakit hesaba kripto varlık bozdururken kullanılır.
 * @param {string} cashAccountId Nakit Hesap ID'si
 * @param {number} withdrawCryptoAmount Alınacak kripto varlık miktarı
 * @param {string} cryptoWalletId Kripto Cüzdan ID'si
 * @param {string} cryptoCurrency  Alınacak kripto varlık türü
 * @param {string} cryptoCurrency  cryptoAmount'a göre hesaplanan, alınacak nakit para miktarı
 */
export function buyCashFromCryptoWallet(
  cashAccountId,
  withdrawCryptoAmount,
  cryptoWalletId,
  cryptoCurrency,
  calculatedCashAmount
) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountData = await checkIfAccountExists(cashAccountId);
      const withdrawWalletData = await checkIfWalletExists(cryptoWalletId);

      const requestedAmount = parseFloat(withdrawCryptoAmount);

      const hasEnoughAssets =
        parseFloat(
          withdrawWalletData.assets.find(
            asset => asset.currency === cryptoCurrency
          ).amount
        ) > requestedAmount;

      if (!hasEnoughAssets) {
        return reject('Yetersiz bakiye');
      }

      //Withdraw
      await updateDocument('wallets', cryptoWalletId, {
        assets: withdrawWalletData.assets.map(asset => {
          if (asset.currency === cryptoCurrency) {
            return {
              ...asset,
              amount: (parseFloat(asset.amount) - requestedAmount).toFixed(6),
            };
          }

          return asset;
        }),
      });

      //Deposit
      await updateDocument('accounts', cashAccountId, {
        available_balance: (
          parseFloat(accountData.available_balance) +
          parseFloat(calculatedCashAmount)
        ).toFixed(6),
      });

      await createOrder(
        `${cryptoCurrency}/${accountData.currency}`,
        withdrawCryptoAmount,
        convertCurrency(cryptoCurrency, 1, accountData.currency),
        'sell',
        accountData.currency
      );

      return resolve('Al/Sat işlemi başarılı.');
    } catch (error) {
      return reject(error.message);
    }
  });
}

/**
 *  Kripto hesabındaki bir kripto varlığı başka bir varlık için satmak için kullanılır.
 * (Çapraz İşlemler)
 * @param {string} withdrawWalletId Kripto varlık çekilecek Kripto Cüzdan'ın ID'si
 * @param {number} withdrawAmount Çekilecek kripto varlık miktarı
 * @param {string} withdrawCurrency Çekilecek kripto varlık türü
 * @param {string} depositCurrency Yatırılacak kripto varlık türü
 * @param {string} depositWalletId Kripto varlık yatırılacak Kripto Cüzdan'ın ID'si
 * @param {number} calculatedDepositAmount withdrawAmount'a göre hesaplanan, alınacak kripto miktarı
 */
export function buyCryptoFromCryptoWallet(
  withdrawWalletId,
  withdrawAmount,
  withdrawCurrency,
  depositCurrency,
  depositWalletId,
  calculatedDepositAmount
) {
  return new Promise(async (resolve, reject) => {
    try {
      const withdrawWalletData = await checkIfWalletExists(withdrawWalletId);
      const depositWalletData = await checkIfWalletExists(depositWalletId);

      const requestedAmount = parseFloat(withdrawAmount);

      const hasEnoughAssets =
        parseFloat(
          withdrawWalletData.assets.find(
            asset => asset.currency === withdrawCurrency
          ).amount
        ) > requestedAmount;

      if (!hasEnoughAssets) {
        return reject('Yetersiz bakiye');
      }

      await updateDocument('wallets', depositWalletId, {
        assets: depositWalletData.assets.map(asset => {
          if (asset.currency === depositCurrency) {
            return {
              ...asset,
              amount: (
                parseFloat(asset.amount) + parseFloat(calculatedDepositAmount)
              ).toFixed(6),
            };
          }
          if (asset.currency === withdrawCurrency) {
            return {
              ...asset,
              amount: (parseFloat(asset.amount) - requestedAmount).toFixed(6),
            };
          }

          return asset;
        }),
      });

      await createOrder(
        `${depositCurrency}/${withdrawCurrency}`,
        calculatedDepositAmount,
        convertCurrency(depositCurrency, 1, withdrawCurrency),
        'buy',
        withdrawCurrency
      );

      return resolve('Al/Sat işlemi başarılı.');
    } catch (error) {
      return reject(error.message);
    }
  });
}

/**
 *
 * @returns {Promise<Array<any>>}
 */
export function getWallets() {
  return fetchCollectionByName('wallets');
}

export async function checkIfWalletExists(walletId) {
  try {
    const wallet = await db.collection('wallets').doc(walletId).get();

    if (wallet.exists) {
      const data = wallet.data();
      return data;
    } else {
      throw new Error("Cüzdan ID'si geçersiz.");
    }
  } catch (error) {
    throw error;
  }
}
