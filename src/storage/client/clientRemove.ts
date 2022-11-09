import AsyncStorage from '@react-native-async-storage/async-storage';

import { CLIENT_COLLECTION } from '../storageConfig';
import { clientsGetAll } from './clientsGetAll';

export async function clientRemove(clientSelected) {
  try {
    const storedClients = await clientsGetAll();
    const clients = storedClients.filter(client => client !== clientSelected);
    await AsyncStorage.setItem(CLIENT_COLLECTION, JSON.stringify(clients));
  } catch (error) {
    throw error;
  }
}
