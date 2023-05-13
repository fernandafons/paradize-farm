import React, { useState } from 'react';

import { 
  CenteredView,
  Container,
  ModalContainer,
  CloseButton,
  OptionsConainer,
  ModalText,
  CloseText,
  ModalButton, 
  ButtonText, 
} from './styles';
import { View } from 'react-native';

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
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ModalContainer>
          <CloseButton onPress={() => setModalVisible(false)}>
            <CloseText>X</CloseText>
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
        </View>
      </Container>
    </CenteredView>
  )
}

export default AddModal;