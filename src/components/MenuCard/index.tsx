import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Title
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ElementType<IconProps>;
}

export function MenuCard({ title, icon: Icon, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <Icon
        size={48}
        color={colors.white}
        weight="fill"
      />
      <Title> {title} </Title>
    </Container>
  );
}
