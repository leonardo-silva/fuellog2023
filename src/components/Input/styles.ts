import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.header_text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  border-radius: 5px;
  padding: 18px 16px;
  margin-bottom: 8px;
`;