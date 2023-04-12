import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 40px 15px;
`;

export const MonthExpenseContainer = styled.View`
  height: 95px;
  margin: 50px 0 15px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ValueBoxMonthExpense = styled.View`
`;

export const ButtonBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MonthExpenseText = styled.Text`
  color: #5e5e5e;
  font-size: 16px;
`;

export const MonthExpenseNumber = styled.Text`
  font-size: 28px;
`;

export const AddExpenseButton = styled.TouchableOpacity`
  background-color: #788789;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 26px;
`;

export const OutsideButtonText = styled.Text`
  text-align: center;
`;

export const EditExpenseButton = styled.View``;

export const ExpenseBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px 8px 5px;
`;

export const NameExpense = styled.Text``;

export const ValueBox = styled.Text``;

export const TextExpense = styled.Text``;

export const ValueExpense = styled.Text``;

export const ExpensesContainer = styled.View`
  display: flex;
  flex: 1;
  padding: 15px;
`;