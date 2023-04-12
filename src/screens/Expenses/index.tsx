import React from 'react';
import { View, Text } from 'react-native';

import { 
  Container,
  ExpensesContainer,
  ValueBoxMonthExpense,
  MonthExpenseContainer,
  MonthExpenseText,
  ButtonBox,
  OutsideButtonText,
  MonthExpenseNumber,
  AddExpenseButton,
  ButtonText,
  EditExpenseButton,
  ExpenseBox,
  NameExpense,
  ValueBox,
  TextExpense,
  ValueExpense,
} from './styles';

const Expenses: React.FC = () => {
  return (
    <Container>
      <MonthExpenseContainer>
        <ValueBoxMonthExpense>
          <MonthExpenseText>Total de despesas {`\n`} este mês:</MonthExpenseText>
          <MonthExpenseNumber>$ 2.980,72</MonthExpenseNumber>
        </ValueBoxMonthExpense>
        <ButtonBox>
          <AddExpenseButton>
            <ButtonText>+</ButtonText>
          </AddExpenseButton>
          <OutsideButtonText>Cadastrar {`\n`}despesa</OutsideButtonText>
        </ButtonBox>
      </MonthExpenseContainer>
      <ExpensesContainer>
        <ExpenseBox>
          <NameExpense>Ração gado</NameExpense>
          <ValueBox>
            <TextExpense>R$ </TextExpense>
            <ValueExpense>100,00</ValueExpense>
          </ValueBox>
        </ExpenseBox>
        <ExpenseBox>
          <NameExpense>Ração galinha</NameExpense>
          <ValueBox>
            <TextExpense>R$ </TextExpense>
            <ValueExpense>80,00</ValueExpense>
          </ValueBox>
        </ExpenseBox>
        <ExpenseBox>
          <NameExpense>Madeira</NameExpense>
          <ValueBox>
            <TextExpense>R$ </TextExpense>
            <ValueExpense>100,00</ValueExpense>
          </ValueBox>
        </ExpenseBox>
        <ExpenseBox>
          <NameExpense>Cimento</NameExpense>
          <ValueBox>
            <TextExpense>R$ </TextExpense>
            <ValueExpense>100,00</ValueExpense>
          </ValueBox>
        </ExpenseBox>
      </ExpensesContainer>
    </Container>
    )
}

export default Expenses;