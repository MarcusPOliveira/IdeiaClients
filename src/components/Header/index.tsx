import React from 'react';

import {
  Container,
  TitleWrapper,
  Title,
} from './styles';

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}
