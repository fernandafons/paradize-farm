import React, { useState } from 'react';

import { 
  Container,
  ModalContainer,
  CloseButton,
  OptionsConainer,
  ModalText, 
  ModalButton, 
  ButtonText, 
} from './styles';
import { Modal } from 'react-native';

interface Props {
  modalVisible: boolean;
  setModalVisible: (newValue: boolean) => void;
}


const AddModal: React.FC<Props> = ({ modalVisible, setModalVisible }) => {


  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalContainer>
          <CloseButton onPress={() => setModalVisible(false)}>
            <ButtonText>X</ButtonText>
          </CloseButton>
          <ModalText>Adicionar:</ModalText>
          <OptionsConainer>
            <ModalButton>
              <ButtonText>Lote</ButtonText>
            </ModalButton>
            <ModalButton>
              <ButtonText>Individualmente</ButtonText>
            </ModalButton>
          </OptionsConainer>
        </ModalContainer>
      </Modal>
    </Container>
  )
}

export default AddModal;