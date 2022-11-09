import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 340px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.primary_100};
  flex-direction: row;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ClientInfo = styled.View`
  flex: 0.8;
  flex-direction: row;
`;

export const ContractArea = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
`;

export const Contract = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const InfoArea = styled.View`
  flex: 0.6;
  justify-content: space-around;
`;

export const InfoLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const DeleteButton = styled.TouchableOpacity`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
