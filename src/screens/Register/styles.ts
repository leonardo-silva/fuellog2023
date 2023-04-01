import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.header_text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Fields = styled.View``;

export const FuelTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
