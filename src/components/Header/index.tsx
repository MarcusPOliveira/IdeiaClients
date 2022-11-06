import React from 'react';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  BackButton,
  TitleWrapper,
  Title,
} from './styles';

type Props = {
  title: string;
  hasBackButton?: boolean;
}

export function Header({ title, hasBackButton = false }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      {
        hasBackButton &&
        <BackButton>
          <CaretLeft size={32} color={colors.white} />
        </BackButton>
      }
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}
