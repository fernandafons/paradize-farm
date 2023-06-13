import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const ViewInsideScroll = styled.View`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const Forms = styled.View`
  display: flex;
  width: 90%;
  height: 85%;
  padding-top: 30px;
  justify-content: center;
`;

export const FieldName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const InputText = styled.Text`
  color: gray;
  margin-right: 5px;
`;

export const Field = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 40px;
  padding-left: 5px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  padding-right: 12px;
  border-width: 1px;
  border-color: gray;
  background-color: white;
`;

export const LongTextInput = styled.TextInput`
  width: 60%;
  padding-left: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 6px;
  padding-right: 12px;
  border-width: 1px;
  border-color: gray;
  background-color: white;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: gray;
  margin-top: 50px;
  height: 45px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
