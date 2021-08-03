import React from 'react';
import firebase from 'firebase/app';

/**
 *
 * @returns {firebase.User | null}
 */
function useCurrentUser() {
  const [user, setUser] = React.useState();

  firebase.auth().onAuthStateChanged(user => {
    setUser(user);
  });

  return user;
}

export default useCurrentUser;
