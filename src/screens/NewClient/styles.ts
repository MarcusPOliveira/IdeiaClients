import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export type SelectionProps = {
  isSelected?: boolean;
}

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
`;

export const Content = styled(ScrollView).attrs({
  alignItems: 'center',
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  elevation: 50;
`;

export const FormTypeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FormTypeButton = styled.TouchableOpacity<SelectionProps>`
  width: 50%;
  align-items: center;
  margin-top: 10px;
  ${({ isSelected, theme }) => isSelected && css`
    border-bottom-width: 2px;
    border-color: ${theme.colors.primary};
  `}
`;

export const ButtonLabel = styled.Text<SelectionProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.text : theme.colors.shape};
`;

export const TitleWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.View`
  width: 100%;
  padding: 25px;
`;

export const InputLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
