import React from 'react';
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

const Register: React.FC = () => {
  let totalCattle = 0;
  for (let i = 0; i < data.length; i++) {
    totalCattle += data[i].value
  }
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
        <AddButton>
          <ButtonText>Cadastrar novo</ButtonText>
        </AddButton>
        <ButtonBox>
          <AddCattleButton>
          <AntDesign name="download" size={24} color="white" />
          </AddCattleButton>
          <OutsideButtonText>Exportar</OutsideButtonText>
        </ButtonBox>
      </ButtonsContainer>
    </Container>
    )
}

export default Register;