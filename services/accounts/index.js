import { fetchCollectionByName } from '../database';
import { db } from '../../firebase';
import { EXCHANGE_RATES } from '../../hooks/useCurrency';

/**
 *
 * @returns {Promise<Array<any>>}
 */
export function getAccounts() {
  return fetchCollectionByName('accounts');
}

/**
 *
 * @param {string} withdrawAccountId
 * @param {string} depositAccountId
 * @param {number} amount
 * @param {string} currency
 */
export function tradeCurrencies(
  withdrawAccountId,
  depositAccountId,
  amount,
  currency
) {
  return new Promise(async (resolve, reject) => {
    try {
      const withdrawAccountData = await checkIfAccountExists(withdrawAccountId);
      const depositAccountData = await checkIfAccountExists(depositAccountId);

      const {
        available_balance: withdrawAccountBalance,
        currency: withdrawAccountCurrency,
      } = withdrawAccountData;

      const {
        available_balance: depositAccountBalance,
        currency: depositAccountCurrency,
      } = depositAccountData;

      const requestedAmount =
        parseFloat(amount) * parseFloat(EXCHANGE_RATES[currency].try ?? 1);
      const withdrawAccountAvailableAmount =
        parseFloat(withdrawAccountBalance) *
        parseFloat(EXCHANGE_RATES[withdrawAccountCurrency].try ?? 1);

      if (requestedAmount > withdrawAccountAvailableAmount) {
        return reject('Yetersiz bakiye');
      } else {
        //Update firebase

        await db
          .collection('accounts')
          .doc(withdrawAccountId)
          .update({
            available_balance:
              parseFloat(withdrawAccountAvailableAmount - requestedAmount) *
              parseFloat(EXCHANGE_RATES.try[withdrawAccountCurrency] ?? 1),
          });

        await db
          .collection('accounts')
          .doc(depositAccountId)
          .update({
            available_balance:
              parseFloat(depositAccountBalance) +
              parseFloat(
                requestedAmount *
                  (EXCHANGE_RATES.try[depositAccountCurrency] ?? 1)
              ),
          });

        return resolve('Al/Sat İşlemi Başarıyla Tamamlandı');
      }
    } catch (error) {
      return reject(error);
    }
  });
}

export async function checkIfAccountExists(accountId) {
  try {
    const account = await db.collection('accounts').doc(accountId).get();

    if (account.exists) {
      const data = account.data();
      return data;
    } else {
      throw new Error("Hesap ID'si geçersiz.");
    }
  } catch (error) {
    throw error;
  }
}
