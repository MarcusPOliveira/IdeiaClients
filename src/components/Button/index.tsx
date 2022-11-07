import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Title
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container
      {...rest}
    >
      {
        isLoading
          ? <ActivityIndicator size="small" color={colors.white} />
          : <Title>{title}</Title>
      }
    </Container>
  );
}
