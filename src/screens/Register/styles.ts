import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  /* justify-content: flex-end; */
  padding: 40px 15px 0 15px;
`;

export const TitleContainer = styled.Text`
  font-size: 22px;
  margin: 50px 0 20px 10px;
`;

export const CattleContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 25px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ButtonsContainer = styled.View`
  margin: 20px 0 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ValueBoxMonthCattle = styled.View`
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #788789;
  height: 50px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const VerticalLine = styled.View`
  border: 0.2px solid #788789;
`;

export const ButtonBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MonthCattleText = styled.Text`
  color: #5e5e5e;
  font-size: 16px;
`;

export const MonthCattleNumber = styled.Text`
  font-size: 28px;
`;

export const AddCattleButton = styled.TouchableOpacity`
  background-color: #474b24;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const OutsideButtonText = styled.Text`
  text-align: center;
`;

export const EditCattleButton = styled.View``;

export const CattleBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 5px 3px 5px;
`;

export const NameCattle = styled.Text`
  font-size: 16px;
`;

export const ValueBox = styled.View`
  display: flex;
  flex-direction: row;
  width: 35%;
`;

export const TextCattle = styled.Text`
  font-size: 16px;
`;

export const ValueCattle = styled.Text`
  font-size: 16px;
`;
