import React from 'react';
import { UserPlus, UsersThree } from 'phosphor-react-native';

import ApresentationImg from '../../assets/client.png';
import { MenuCard } from '../../components/MenuCard';
import {
  Container,
  Header,
  Title,
  Content,
  ApresentationImage,
  Subtitle,
  MenuWrapper
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <Title>IdeiaClients</Title>
      </Header>
      <Content>
        <ApresentationImage source={ApresentationImg} resizeMode="contain" />
        <Subtitle>Gerenciamneto{'\n'}de clientes</Subtitle>
        <MenuWrapper>
          <MenuCard
            title={`Cadastrar${'\n'}cliente`}
            icon={UserPlus}
          />
          <MenuCard
            title={`Meus${'\n'}clientes`}
            icon={UsersThree}
          />
        </MenuWrapper>
      </Content>
    </Container>
  );
}
