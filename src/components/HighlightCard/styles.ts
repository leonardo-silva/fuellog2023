import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'alcohol' | 'gasoline' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title : theme.colors.header_text};

  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.card_title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const Icon = styled(MaterialIcons)<TypeProps>`
  font-size: ${RFValue(45)}px;

  ${(props) => props.type === 'alcohol' && css`
    color: ${({ theme }) => theme.colors.primary_light};
  `}

  ${(props) => props.type === 'gasoline' && css`
    color: ${({ theme }) => theme.colors.secondary};
  `}

  ${(props) => props.type === 'total' && css`
    color: ${({ theme }) => theme.colors.header_text};
  `}
`;

export const Consumption = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(10)}px;
`;

export const ConsumptionLabel = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 15px;
`;

export const ConsumptionValue = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(16)}px;
`;

export const Cost = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
`;

export const CostLabel = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 30px;
`;

export const CostValue = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(16)}px;
`;

export const Footer = styled.View``;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
