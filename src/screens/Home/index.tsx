import React from 'react';

import ApresentationImg from '../../assets/client.png';
import { Header } from '../../components/Header';
import {
  Container,
  Content,
  ApresentationImage,
  Subtitle,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header title="IdeiaClients" />
      <Content>
        <ApresentationImage source={ApresentationImg} resizeMode="contain" />
        <Subtitle>Gerenciamento{'\n'}de clientes{'\n'}da forma fácil!</Subtitle>
      </Content>
    </Container>
  );
}
