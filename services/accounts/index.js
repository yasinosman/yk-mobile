import { fetchCollectionByName } from '../database';

/**
 *
 * @returns {Promise<Array<any>>}
 */
function getAccounts() {
  return fetchCollectionByName('accounts');
}

export { getAccounts };
