import styled from 'styled-components/native';
import { Modal } from 'react-native';

export const CenteredView = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
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
  justify-content: center;
  background-color: white;
  elevation: 5;
  padding: 20px;
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
  width: 50px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: white;
`;
