import { auth } from '../../firebase';
import { fetchData } from '../../utils';

/**
 *
 * @param {{nationalIdentity: number, password: number}} param0
 * @returns {Promise<firebase.User>} User info
 */
function login({ nationalIdentity, password }) {
  const CUSTOM_AUTHENTICATION_API_ADDRESS =
    'https://us-central1-yk-mobile-7ce20.cloudfunctions.net/login';

  return new Promise(async (resolve, reject) => {
    try {
      const result = await fetchData({
        url: CUSTOM_AUTHENTICATION_API_ADDRESS,
        method: 'POST',
        body: { nationalIdentity, password },
      });
      const { token } = result;

      const userCredential = await auth.signInWithCustomToken(token);

      let { user } = userCredential;

      return resolve(user);
    } catch (error) {
      return reject(error);
    }
  });
}

export { login };
