import AsyncStorage from '@react-native-async-storage/async-storage';

import { CLIENT_COLLECTION } from '../storageConfig';

export async function clientsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CLIENT_COLLECTION);
    const clients: string[] = storage ? JSON.parse(storage) : [];
    return clients;
  } catch (error) {
    throw error;
  }
}
