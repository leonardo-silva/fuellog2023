import { TouchableOpacityProps } from "react-native";

import { 
  Container,
  Button,
  Icon,
  Title, 
} from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'alcohol' | 'gasoline';
  isActive: boolean;
}

export function FuelTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container
      type={type}
      isActive={isActive}
    >
      <Button
        {...rest}
      >
        <Icon 
          name='local-gas-station'
          type={type}
          isActive={isActive}
        />
        <Title isActive={isActive}>{title}</Title>
      </Button>
    </Container>
  )
}