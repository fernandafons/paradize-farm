import styled from 'styled-components/native';
import { Modal } from 'react-native';

export const CenteredView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled(Modal)`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const OptionsConainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ModalContainer = styled.View`
  align-items: center;
  justify-content: space-between;;
  background-color: white;
  elevation: 5;
  padding: 20px;
  height: 30%;
  margin-top: 55%;
`;

export const ModalText = styled.Text`
  font-size: 18px;
`;

export const ModalButton = styled.TouchableOpacity`
  display: flex;
  width: 150px;
  height: 50px;
  margin: 10px;
  border-radius:5px;
  align-items: center;
  justify-content: center;
  background-color: #788789;
`;

export const CloseButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const CloseText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: white;
`;
