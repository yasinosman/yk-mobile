import { fetchCollectionByName } from '../database';

function getCards() {
  return fetchCollectionByName('cards');
}

export { getCards };
