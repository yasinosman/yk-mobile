import useFirestoreCollection from './useFirestoreCollection';

const useCards = () => {
  return useFirestoreCollection('cards');
};

export default useCards;
