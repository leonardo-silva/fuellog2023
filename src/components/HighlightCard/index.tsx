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

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Álcool</Title>
        <Icon name="local-gas-station" />
      </Header>

      <Consumption>
        <ConsumptionLabel>Consumo médio: </ConsumptionLabel>
        <ConsumptionValue>7,00 km/l</ConsumptionValue>
      </Consumption>

      <Cost>
        <CostLabel>Custo por km: </CostLabel>
        <CostValue>R$ 0,34 / km</CostValue>
      </Cost>

      <Footer>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}