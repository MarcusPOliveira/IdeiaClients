import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.15;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  elevation: 50;
`;

export const ApresentationImage = styled.Image`
  width: 250px;
  height: 130px;
  margin-top: 30px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 30px;
`;

export const MenuWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 20px;
`;
