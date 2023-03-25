import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header_text};
  border-radius: 5px;

  padding: 10px 22px;
  margin-top: ${RFValue(18)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ValueLabel = styled.Text`
  color: ${({ theme }) => theme.colors.card_title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 15px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 10px 0;
`;

export const KmContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

