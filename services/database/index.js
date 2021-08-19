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

/**
 *  Firebase'de bulunan bir dokümanı günceller
 * @param {string} collectionName Güncellenecek dokümanın bulunduğu koleksiyon adı
 * @param {string} documentId Güncellenecek dokümanın ID'si
 * @param {any} data Güncellenecek alanlar
 */
export function updateDocument(collectionName, documentId, data) {
  return db.collection(collectionName).doc(documentId).update(data);
}

export { fetchCollectionByName };
