import { HighlightCard } from '../../components/HighlightCard';
import { 
  Container,
  Header,
  UserWrapper,
  CarInfo,
  CarIcon,
  HeaderTextWrapper,
  Greeting,
  CarPlate,
  LogoutButton,
  LogoutIcon,
  HighlightCards 
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <CarInfo>
            <CarIcon name='directions-car'>

            </CarIcon>
            <HeaderTextWrapper>
              <Greeting>
                Placa
              </Greeting>
              <CarPlate>
                AAA-9999
              </CarPlate>
            </HeaderTextWrapper>
          </CarInfo>
          <LogoutButton>
            <LogoutIcon name='logout'>

            </LogoutIcon>
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          title='Álcool'
          consumption='7,00 km/l'
          cost='R$ 0,34 / km'
          lastTransaction='Última entrada dia 13 de abril'
          type='alcohol'
        />
        <HighlightCard 
          title='Gasolina'
          consumption='8,63 km/l'
          cost='R$ 0,28 / km'
          lastTransaction='Última entrada dia 03 de abril'
          type='gasoline'
        />
        <HighlightCard 
          title='Geral'
          consumption='7,82 km/l'
          cost='R$ 0,31 / km'
          lastTransaction='01 a 16 de abril'
          type='total'
        />
      </HighlightCards>
    </Container>
  );
}

