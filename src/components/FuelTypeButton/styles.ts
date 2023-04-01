import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TitleProps {
  isActive: boolean;
}

interface Props extends TitleProps {
  type: 'alcohol' | 'gasoline';
}

export const Container = styled.View<Props>`
  ${(props) => props.type === 'alcohol' && props.isActive && css`
    background-color: ${({ theme }) => theme.colors.primary_extra_light};
  `}

  ${(props) => props.type === 'gasoline' && props.isActive && css`
    background-color: ${({ theme }) => theme.colors.secondary_extra_light};
  `}

  border-color: ${({ theme }) => theme.colors.text_extra_light};
  border-width: 1.5px;
  border-radius: 5px;
  border-style: solid;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 18px 32px 17px 23px;
`;

export const Icon = styled(MaterialIcons)<Props>`
  ${(props) => props.type === 'alcohol' && css`
    color: ${({ theme }) => 
      props.isActive ? theme.colors.primary_light : theme.colors.primary_extra_light};
  `}

  ${(props) => props.type === 'gasoline' && css`
    color: ${({ theme }) => 
      props.isActive ? theme.colors.secondary : theme.colors.secondary_extra_light};
  `}
  font-size: ${RFValue(30)}px;
  margin-right: 12px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, isActive }) => 
    isActive ? theme.colors.card_title : theme.colors.card_title_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

