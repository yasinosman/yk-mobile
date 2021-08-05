const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceKey.json');
const { v4: uuid } = require('uuid');
const firebase = require('firebase/app');

// Optionally import the services that you want to use
require('firebase/auth');
//import "firebase/database";
require('firebase/firestore');
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyABvJ7I6yCf-b8FidWxsJuw01OR5TkQ9KM',
  authDomain: 'yk-mobile-7ce20.firebaseapp.com',
  projectId: 'yk-mobile-7ce20',
  storageBucket: 'yk-mobile-7ce20.appspot.com',
  messagingSenderId: '757983497368',
  appId: '1:757983497368:web:5dd504012c79ca855494ed',
};

firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.login = functions.https.onRequest(async (req, res) => {
  try {
    const { nationalIdentity, password } = req.body;

    const user = await firebase
      .firestore()
      .collection('users')
      .where('nationalIdentity', '==', nationalIdentity)
      .where('password', '==', password)
      .get();

    if (!user.empty) {
      //Generate token
      const id = uuid();

      const token = await admin.auth().createCustomToken(id, {
        nationalIdentity: nationalIdentity,
        userId: id,
      });

      return res
        .status(200)
        .json({ result: { message: 'Giriş işlemi başarılı.', token: token } });
    } else {
      return res.status(400).json({
        result: {
          message: 'Giriş bilgileriniz geçersiz, lütfen tekrar deneyin.',
          error: 'Invalid credentials',
        },
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: { message: 'Sunucu hatası', error: error } });
  }
});

exports.register = functions.https.onRequest(async (req, res) => {
  try {
    const { nationalIdentity, password } = req.body;

    const result = await firebase
      .firestore()
      .collection('users')
      .add({ nationalIdentity: nationalIdentity, password: password });

    //Generate token
    const id = uuid();

    const token = await admin.auth().createCustomToken(id, {
      nationalIdentity: nationalIdentity,
      userId: id,
    });

    return res.status(201).json({
      result: { message: `Kayıt işlemi tamamlandı.`, token: token },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ result: { message: 'Sunucu hatası', error: error } });
  }
});
