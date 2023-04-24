import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { 
  Container,
  TitleContainer,
  CattleContainer,
  AddButton,
  ButtonsContainer,
  ButtonBox,
  OutsideButtonText,
  AddCattleButton,
  ButtonText,
  CattleBox,
  NameCattle,
  ValueBox,
  TextCattle,
  ValueCattle,
  VerticalLine,
} from './styles';

import { data } from './registered';
import AddModal from '../../components/AddModal';

const Register: React.FC = () => {
  let totalCattle = 0;
  for (let i = 0; i < data.length; i++) {
    totalCattle += data[i].value
  }
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  return (
    <Container>
      <TitleContainer>Últimos cadastros</TitleContainer>
      <CattleContainer>
        {data.map((item) =>
          <>
            <CattleBox key={item.id}>
              <NameCattle>{item.item}</NameCattle>
              <ValueBox>
                <TextCattle>R$ </TextCattle>
                <ValueCattle>{item.value}</ValueCattle>
              </ValueBox>
            </CattleBox>
            <VerticalLine />
          </>
        )}
      </CattleContainer>
      <ButtonsContainer>
        <AddButton onPress={() => showModal()}>
          <ButtonText>Cadastrar novo</ButtonText>
        </AddButton>
        <ButtonBox>
          <AddCattleButton>
          <AntDesign name="download" size={24} color="white" />
          </AddCattleButton>
          <OutsideButtonText>Exportar</OutsideButtonText>
        </ButtonBox>
      </ButtonsContainer>
      <AddModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
      />
    </Container>
    )
}

export default Register;