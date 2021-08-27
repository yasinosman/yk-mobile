import useFirestoreCollection from './useFirestoreCollection';

const useCards = () => {
  const [cards, loading] = useFirestoreCollection('cards');

  return [cards, loading];
};

export default useCards;
