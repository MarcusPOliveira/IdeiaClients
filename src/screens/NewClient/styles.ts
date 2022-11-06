import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
`;
