import AsyncStorage from '@react-native-async-storage/async-storage';
import Datastore from 'react-native-local-mongodb';

const db = new Datastore({
  filename: 'asyncStorageKey',
  storage: AsyncStorage
})

export { db }


