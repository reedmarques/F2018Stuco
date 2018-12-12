import firebase from 'firebase'
import {config} from './env'

firebase.initializeApp(config);

export default firebase;
