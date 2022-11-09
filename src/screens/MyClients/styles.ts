import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
`;

export const Content = styled(FlatList).attrs({
  alignItems: 'center',
})`
  flex: 1;
  padding: 20px 40px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  elevation: 50;
`;
