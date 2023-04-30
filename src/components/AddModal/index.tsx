import React, { useState } from 'react';

import { 
  CenteredView,
  Container,
  ModalContainer,
  CloseButton,
  OptionsConainer,
  ModalText, 
  ModalButton, 
  ButtonText, 
} from './styles';

interface Props {
  modalVisible: boolean;
  setModalVisible: (newValue: boolean) => void;
}


const AddModal: React.FC<Props> = ({ modalVisible, setModalVisible }) => {


  return (
    <CenteredView>
      <Container
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
      </Container>
    </CenteredView>
  )
}

export default AddModal;