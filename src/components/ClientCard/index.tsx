import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { ClientDTO } from '../../dtos/ClientDTO';
import {
  ClientInfo,
  Container,
  ContractArea,
  InfoArea,
  InfoLabel,
  DeleteButton,
  Contract,
} from './styles';

type Props = TouchableOpacityProps & {
  data: ClientDTO;
}

export function ClientCard({ data, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <ClientInfo>
        <ContractArea>
          <Contract
            source={{ uri: data.clientContract }}
          />
        </ContractArea>
        <InfoArea>
          {
            data.formTypeSelected === 'pf' ?
              <>
                <InfoLabel style={{ fontWeight: 'bold' }}> {data.name} </InfoLabel>
                <InfoLabel> Pessoa Física </InfoLabel>
                <InfoLabel> {data.cpf} </InfoLabel>
                <InfoLabel> {data.city} </InfoLabel>
              </>
              :
              <>
                <InfoLabel style={{ fontWeight: 'bold' }}> {data.companyName} </InfoLabel>
                <InfoLabel> Pessoa Jurídica </InfoLabel>
                <InfoLabel> {data.cnpj} </InfoLabel>
                <InfoLabel> {data.city} </InfoLabel>
              </>
          }
        </InfoArea>
      </ClientInfo>
      <DeleteButton {...rest}>
        <Trash size={32} color={colors.white} />
      </DeleteButton>
    </Container>
  );
}
