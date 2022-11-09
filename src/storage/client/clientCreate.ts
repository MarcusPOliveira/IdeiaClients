import AsyncStorage from '@react-native-async-storage/async-storage';

import { CLIENT_COLLECTION } from '../storageConfig';
import { clientsGetAll } from './clientsGetAll';

export async function clientCreate(newClient: string) {
  try {
    const storedClients = await clientsGetAll();
    const storage = JSON.stringify([...storedClients, newClient]);
    await AsyncStorage.setItem(CLIENT_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
