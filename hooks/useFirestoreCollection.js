import React from 'react';
import { db } from '../firebase';

/**
 *
 * @param {string} collectionName
 * @returns {[Array<{[field: string]: any}>, boolean]}
 */
const useFirestoreCollection = collectionName => {
  const [documents, setDocuments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = db.collection(collectionName).onSnapshot(snapshot => {
      setLoading(true);
      let result = [];

      snapshot.forEach(doc => {
        result.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(result);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return [documents, loading];
};

export default useFirestoreCollection;
