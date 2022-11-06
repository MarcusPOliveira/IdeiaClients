import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 0.15;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30%;
  padding-left: 20px;
`;

export const TitleWrapper = styled.View`
  width: 70%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

