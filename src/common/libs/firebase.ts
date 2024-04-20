import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAM5_ikFJf3YeNtl1zxXbqp5VsWM9Q10Ho',
  authDomain: 'zhihuiyuyan.firebaseapp.com',
  projectId: 'zhihuiyuyan',
  storageBucket: 'zhihuiyuyan.appspot.com',
  messagingSenderId: '387955199135',
  appId: '1:387955199135:web:5415f7f165032b962be6aa',
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
