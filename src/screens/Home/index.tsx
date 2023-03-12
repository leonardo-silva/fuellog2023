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
  LogoutIcon 
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
    </Container>
  );
}

