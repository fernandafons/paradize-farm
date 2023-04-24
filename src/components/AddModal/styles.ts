import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const OptionsConainer = styled.View`
  display: flex;

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
  width: 100px;
`;

export const CloseButton = styled.TouchableOpacity`
  display: flex;
  width: 50px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
`;
