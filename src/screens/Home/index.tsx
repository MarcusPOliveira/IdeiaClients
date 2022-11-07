import React from 'react';
import { UserPlus, UsersThree } from 'phosphor-react-native';

import ApresentationImg from '../../assets/client.png';
import { Header } from '../../components/Header';
import { MenuCard } from '../../components/MenuCard';
import {
  Container,
  Content,
  ApresentationImage,
  Subtitle,
  MenuWrapper
} from './styles';

export function Home() {
  return (
    <Container>
      <Header title="IdeiaClients" />
      <Content>
        <ApresentationImage source={ApresentationImg} resizeMode="contain" />
        <Subtitle>Gerenciamneto{'\n'}de clientes</Subtitle>
      </Content>
    </Container>
  );
}
