import useFirestoreCollection from './useFirestoreCollection';

const useWallets = () => {
  return useFirestoreCollection('wallets');
};

export default useWallets;
