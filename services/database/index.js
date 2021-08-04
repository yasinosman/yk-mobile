import { db } from '../../firebase';

/**
 *
 * @param {string} collectionName Koleksiyon adı
 */
function fetchCollectionByName(collectionName) {
  return new Promise((resolve, reject) => {
    let entities = [];

    db.collection(collectionName)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          entities.push({ ...doc.data(), id: doc.id });
        });
        return resolve(entities);
      })
      .catch(error => {
        return reject(error);
      });
  });
}

export { fetchCollectionByName };
