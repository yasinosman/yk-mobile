import useFirestoreCollection from './useFirestoreCollection';

const useWallets = () => {
  const [wallets, loading] = useFirestoreCollection('wallets');

  return [wallets, loading];
};

export default useWallets;
