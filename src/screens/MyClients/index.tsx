import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { clientsGetAll } from '../../storage/client/clientsGetAll';
import { ClientDTO } from '../../dtos/ClientDTO';
import { Header } from '../../components/Header';
import { ClientCard } from '../../components/ClientCard';
import { clientRemove } from '../../storage/client/clientRemove';
import {
  Container,
  Content,
} from './styles';

export type ClientProps = ClientDTO & {
  _id: string;
}

export function MyClients({ _id }: ClientProps) {
  const [clients, setClients] = useState<ClientProps[]>([]);

  const navigation = useNavigation();

  async function fetchClients() {
    try {
      const data = await clientsGetAll();
      console.log(data);
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveClient() {
    Alert.alert(
      'Remover',
      'Deseja remover o cliente permanentemente?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => onClientRemove() }
      ]
    )
  }

  async function onClientRemove() {
    try {
      await clientRemove(clients);
      console.log("id selecionado: ", clients)
    } catch (error) {
      console.log(error);
      Alert.alert('Opa!', 'Não foi possível remover o cliente!');
    }
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
          <ClientCard data={item} onPress={handleRemoveClient} />
        )}
      />
    </Container>
  );
}
