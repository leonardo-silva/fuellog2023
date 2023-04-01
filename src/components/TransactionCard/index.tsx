import { 
  Container,
  Header,
  ValueContainer,
  ValueLabel,
  Value,
  Type,
  AmountContainer,
  Amount,
  Footer,
  KmContainer,
  Date,
} from "./styles";

export interface TransactionCardProps {
  type: 'alcohol' | 'gasoline';
  value: string;
  price: string;
  amount: string;
  km: string;
  date: string; 
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Header>
        <ValueContainer>
          <ValueLabel>Valor: </ValueLabel>
          <Value type={data.type}>{data.value}</Value>
        </ValueContainer>
        <Type>
          {data.type === 'alcohol' ? 'Álcool' : 'Gasolina'}
        </Type>
      </Header>

      <AmountContainer>
        <ValueLabel>Preço do litro: </ValueLabel>
        <Amount>{data.price}</Amount>
      </AmountContainer>

      <AmountContainer>
        <ValueLabel>Qtd de litros: </ValueLabel>
        <Amount>{data.amount}</Amount>
      </AmountContainer>

      <Footer>
        <KmContainer>
          <ValueLabel>Km percorrida: </ValueLabel>
          <Amount>{data.km}</Amount>
        </KmContainer>
        <Date>{data.date}</Date>
      </Footer>
      
    </Container>
  )
}