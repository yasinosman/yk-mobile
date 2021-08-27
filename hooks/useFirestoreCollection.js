import React from 'react';
import { db } from '../firebase';

const useFirestoreCollection = collectionName => {
  const [documents, setDocuments] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db.collection(collectionName).onSnapshot(snapshot => {
      let result = [];

      snapshot.forEach(doc => {
        result.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(result);
    });

    return unsubscribe;
  }, []);

  return documents;
};

export default useFirestoreCollection;
