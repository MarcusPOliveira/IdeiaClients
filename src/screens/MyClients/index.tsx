import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { clientsGetAll } from '../../storage/client/clientsGetAll';
import { ClientDTO } from '../../dtos/ClientDTO';
import { Header } from '../../components/Header';
import { ClientCard } from '../../components/ClientCard';
import {
  Container,
  Content,
} from './styles';

export type ClientProps = ClientDTO & {
  _id: string;
}

export function MyClients() {
  const [clients, setClients] = useState<ClientProps[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  //const { _id } = route.params as ClientDTO;

  async function fetchClients() {
    try {
      const data = await clientsGetAll();
      console.log(data);
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteClient() {

  }

  useFocusEffect(
    useCallback(() => {
      fetchClients();
    }, []));

  return (
    <Container>
      <Header title="Meus clientes" />
      <Content
        data={clients}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ClientCard data={item} onPress={handleDeleteClient} />
        )}
      />
    </Container>
  );
}
