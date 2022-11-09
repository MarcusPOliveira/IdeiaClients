import AsyncStorage from '@react-native-async-storage/async-storage';
import { ClientDTO } from '../../dtos/ClientDTO';

import { CLIENT_COLLECTION } from '../storageConfig';
import { clientsGetAll } from './clientsGetAll';

export async function clientCreate(newClient) {
  try {
    const storedClients = await clientsGetAll();
    const storage = JSON.stringify([...storedClients, newClient]);
    await AsyncStorage.setItem(CLIENT_COLLECTION, storage);
    const str = JSON.parse(storage);
    return str;
  } catch (error) {
    throw error;
  }
}
