import { fetchCollectionByName, updateDocument } from '../database';
import { db } from '../../firebase';
import { EXCHANGE_RATES } from '../../hooks/useCurrency';
import { checkIfAccountExists } from '../accounts';

/**
 *  Nakit hesabından kripto cüzdana kripto varlık alırken kullanılır.
 * @param {string} cashAccountId Nakit Hesap ID'si
 * @param {number} cashAmount Nakit miktarı
 * @param {string} cryptoWalletId Kripto Cüzdan ID'si
 * @param {string} cryptoCurrency Alınacak kripto varlık türü
 */
export function buyCryptoFromCashAccount(
  cashAccountId,
  cashAmount,
  cryptoWalletId,
  cryptoCurrency
) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountData = await checkIfAccountExists(cashAccountId);
      const walletData = await checkIfWalletExists(cryptoWalletId);

      const requestedAmount =
        parseFloat(cashAmount) *
        (EXCHANGE_RATES[accountData.currency].try ?? 1);

      if (
        parseFloat(accountData.available_balance) *
          (EXCHANGE_RATES[accountData.currency].try ?? 1) <
        requestedAmount
      ) {
        return reject('Yetersiz bakiye');
      }

      //Withdraw
      await updateDocument('accounts', cashAccountId, {
        available_balance: (
          parseFloat(accountData.available_balance) -
          parseFloat(
            requestedAmount * (EXCHANGE_RATES.try[accountData.currency] ?? 1)
          )
        ).toFixed(6),
      });

      //Deposit
      await updateDocument('wallets', cryptoWalletId, {
        assets: walletData.assets.map(asset =>
          asset.currency === cryptoCurrency
            ? {
                ...asset,
                amount: (
                  parseFloat(asset.amount) +
                  parseFloat(
                    cashAmount *
                      EXCHANGE_RATES[accountData.currency][asset.currency]
                  )
                ).toFixed(6),
              }
            : asset
        ),
      });

      return resolve('Al/Sat işlemi başarılı.');
    } catch (error) {
      return reject(error.message);
    }
  });
}

/**
 *  Kripto cüzdanından nakit hesaba kripto varlık bozdururken kullanılır.
 * @param {string} cashAccountId Nakit Hesap ID'si
 * @param {number} cryptoAmount Alınacak kripto varlık miktarı
 * @param {string} crypoWalletId Kripto Cüzdan ID'si
 * @param {string} cryptoCurrency  Alınacak kripto varlık türü
 */
export function buyCashFromCryptoWallet(
  cashAccountId,
  cryptoAmount,
  crypoWalletId,
  cryptoCurrency
) {}

/**
 *  Kripto hesabındaki bir kripto varlığı başka bir varlık için satmak için kullanılır.
 * (Çapraz İşlemler)
 * @param {string} withdrawWalletId Kripto varlık çekilecek Kripto Cüzdan'ın ID'si
 * @param {number} withdrawAmount Çekilecek kripto varlık miktarı
 * @param {string} withdrawCurrency Çekilecek kripto varlık türü
 * @param {string} depositCurrency Yatırılacak kripto varlık türü
 * @param {string} depositWalletId Kripto varlık yatırılacak Kripto Cüzdan'ın ID'si
 */
export function buyCryptoFromCryptoWallet(
  withdrawWalletId,
  withdrawAmount,
  withdrawCurrency,
  depositCurrency,
  depositWalletId
) {
  return new Promise(async (resolve, reject) => {
    try {
      const withdrawWalletData = await checkIfWalletExists(withdrawWalletId);
      const depositWalletData = await checkIfWalletExists(depositWalletId);

      const requestedAmount =
        parseFloat(withdrawAmount) *
        (EXCHANGE_RATES[withdrawCurrency].try ?? 1);

      const hasEnoughAssets =
        parseFloat(
          withdrawWalletData.assets.find(
            asset => asset.currency === withdrawCurrency
          ).amount
        ) *
          EXCHANGE_RATES[withdrawCurrency].try >
        requestedAmount;

      if (!hasEnoughAssets) {
        return reject('Yetersiz bakiye');
      }

      //Withdraw
      console.log({
        withdrawWalletId,
        withdrawAmount,
        withdrawCurrency,
        depositCurrency,
        depositWalletId,
      });
      await updateDocument('wallets', depositWalletId, {
        assets: depositWalletData.assets.map(asset => {
          if (asset.currency === depositCurrency) {
            return {
              ...asset,
              amount: (
                (parseFloat(asset.amount) *
                  EXCHANGE_RATES[depositCurrency].try +
                  requestedAmount) *
                (EXCHANGE_RATES.try[depositCurrency] ?? 1)
              ).toFixed(6),
            };
          }
          if (asset.currency === withdrawCurrency) {
            return {
              ...asset,
              amount: (
                (parseFloat(asset.amount) *
                  EXCHANGE_RATES[withdrawCurrency].try -
                  requestedAmount) *
                (EXCHANGE_RATES.try[withdrawCurrency] ?? 1)
              ).toFixed(6),
            };
          }

          return asset;
        }),
      });

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
