import useFirestoreCollection from './useFirestoreCollection';

function useAccounts() {
  return useFirestoreCollection('accounts');
}

export default useAccounts;
