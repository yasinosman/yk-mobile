import useFirestoreCollection from './useFirestoreCollection';

function useAccounts() {
  const [accounts, loading] = useFirestoreCollection('accounts');

  return [accounts, loading];
}

export default useAccounts;
