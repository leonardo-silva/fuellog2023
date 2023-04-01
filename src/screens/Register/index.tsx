import { FuelTypeButton } from "../../components/FuelTypeButton";
import { Input } from "../../components/Input";
import { 
  Container,
  Header,
  Title, 
  Form,
  Fields,
  FuelTypes,
} from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Qtd. de Litros" 
          />
          <Input 
            placeholder="Preço por Litro"
          />

          <FuelTypes>
            <FuelTypeButton
              title='Álcool'
              type='alcohol'
              isActive={false}
            />
            <FuelTypeButton
              title='Gasolina'
              type='gasoline'
              isActive={true}
            />
          </FuelTypes>
        </Fields>

        {/* <Button /> */}
      </Form>      
    </Container>
  )
}