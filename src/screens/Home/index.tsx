import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
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
  HighlightCards,
  Transactions,
  Title,
  TransactionList 
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'alcohol',
      value: 'R$ 151,24',
      price: 'R$ 3,98',
      amount: '38',
      km: '340',
      date: '13/04/2022'
    },
    {
      id: '2',
      type: 'gasoline',
      value: 'R$ 89,80',
      price: 'R$ 4,49',
      amount: '20',
      km: '200',
      date: '03/04/2022'
    },
    {
      id: '3',
      type: 'gasoline',
      value: 'R$ 89,80',
      price: 'R$ 4,49',
      amount: '20',
      km: '200',
      date: '01/04/2022'
    },
  ];

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

      <Transactions>
        <Title>Abastecimentos</Title>

        <TransactionList 
          data={transactionData}
          keyExtractor={( item ) => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/>}
        />
      </Transactions>
    </Container>
  );
}

