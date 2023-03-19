import {
  Container,
  Header,
  Title,
  Icon,
  Consumption,
  ConsumptionLabel,
  ConsumptionValue,
  Cost,
  CostLabel,
  CostValue,
  Footer,
  LastTransaction,
} from './styles';

interface Props {
  title: string;
  consumption: string;
  cost: string;
  lastTransaction: string;
  type: 'alcohol' | 'gasoline' | 'total';
}

export function HighlightCard({
  title,
  consumption,
  cost,
  lastTransaction,
  type
}: Props) {

  const icons = {
    alcohol: "local-gas-station",
    gasoline: "local-gas-station",
    total: "attach-money"
  }

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icons[type]} type={type}/>
      </Header>

      <Consumption>
        <ConsumptionLabel type={type}>Consumo médio: </ConsumptionLabel>
        <ConsumptionValue type={type}>{consumption}</ConsumptionValue>
      </Consumption>

      <Cost>
        <CostLabel type={type}>Custo por km: </CostLabel>
        <CostValue type={type}>{cost}</CostValue>
      </Cost>

      <Footer>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}