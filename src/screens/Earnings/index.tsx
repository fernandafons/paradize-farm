import React from 'react';

import { 
  Container,
  EarningsContainer,
  ValueBoxMonthEarning,
  MonthEarningContainer,
  MonthEarningText,
  MonthEarningNumber,
  ButtonBox,
  OutsideButtonText,
  AddEarningButton,
  ButtonText,
  EarningBox,
  NameEarning,
  ValueBox,
  TextEarning,
  ValueEarning,
  VerticalLine,
} from './styles';

import { earnings } from './earnings';

interface Props {
  navigation: any;
}

const Earnings: React.FC<Props> = ({ navigation }) => {
  let totalEarnings = 0;
  for (let i = 0; i < earnings.length; i++) {
    totalEarnings += earnings[i].value
  }
  return (
    <Container>
      <MonthEarningContainer>
        <ValueBoxMonthEarning>
          <MonthEarningText>Total de ganhos {`\n`} este mês:</MonthEarningText>
          <MonthEarningNumber>R$ {totalEarnings}</MonthEarningNumber>
        </ValueBoxMonthEarning>
        <ButtonBox>
          <AddEarningButton onPress={() => navigation.navigate('AddEarning')}>
            <ButtonText>+</ButtonText>
          </AddEarningButton>
          <OutsideButtonText>Cadastrar {`\n`}ganho</OutsideButtonText>
        </ButtonBox>
      </MonthEarningContainer>
      <EarningsContainer>
        {earnings.map((item) =>
          <>
            <EarningBox key={item.id}>
              <NameEarning>{item.item}</NameEarning>
              <ValueBox>
                <TextEarning>R$ </TextEarning>
                <ValueEarning>{item.value}</ValueEarning>
              </ValueBox>
            </EarningBox>
            <VerticalLine />
          </>
        )}
      </EarningsContainer>
    </Container>
    )
}

export default Earnings;