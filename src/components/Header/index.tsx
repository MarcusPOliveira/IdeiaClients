import React from 'react';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  TitleWrapper,
  Title,
} from './styles';

type Props = {
  title: string;
}

export function Header({ title }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}
