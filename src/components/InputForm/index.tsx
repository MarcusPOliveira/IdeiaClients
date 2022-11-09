import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  InputWrapper,
  IconContainer,
  InputText,
  ErrorLabel
} from './styles';

type Props = TextInputProps & {
  iconName?: React.ElementType<IconProps>;
  value?: string;
  errorMessage?: string | null;
  isInvalid?: boolean;
}

export function InputForm({ iconName: Icon, value, errorMessage = null, isInvalid = false, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { colors } = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <InputWrapper>
        <IconContainer isFocused={isFocused} >
          <Icon
            color={colors.text}
            size={28}
          />
        </IconContainer>
        <InputText
          isFocused={isFocused}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={value}
          {...rest}
        />
      </InputWrapper>
      {
        isInvalid &&
        <ErrorLabel> {errorMessage} </ErrorLabel>
      }
    </Container>
  );
}
