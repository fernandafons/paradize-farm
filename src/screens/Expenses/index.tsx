import React from 'react';

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
  VerticalLine,
} from './styles';
import { exp } from './expenses';

const Expenses: React.FC = () => {
  let totalExpenses = 0;
  for (let i = 0; i < exp.length; i++) {
    totalExpenses += exp[i].value
  }
  return (
    <Container>
      <MonthExpenseContainer>
        <ValueBoxMonthExpense>
          <MonthExpenseText>Total de despesas {`\n`} este mês:</MonthExpenseText>
          <MonthExpenseNumber>R$ {totalExpenses}</MonthExpenseNumber>
        </ValueBoxMonthExpense>
        <ButtonBox>
          <AddExpenseButton>
            <ButtonText>+</ButtonText>
          </AddExpenseButton>
          <OutsideButtonText>Cadastrar {`\n`}despesa</OutsideButtonText>
        </ButtonBox>
      </MonthExpenseContainer>
      <ExpensesContainer>
        {exp.map((item) =>
          <>
            <ExpenseBox key={item.id}>
              <NameExpense>{item.item}</NameExpense>
              <ValueBox>
                <TextExpense>R$ </TextExpense>
                <ValueExpense>{item.value}</ValueExpense>
              </ValueBox>
            </ExpenseBox>
            <VerticalLine />
          </>
        )}
      </ExpensesContainer>
    </Container>
    )
}

export default Expenses;