import React, { useState } from 'react';

import {
  Container,
  Forms,
  ViewInsideScroll,
  Field,
  FieldName,
  Input,
  LongTextInput,
  AddButton,
  ButtonText,
} from './styles';

const AddPregnancy: React.FC = () => {
  const [obs, setObs] = useState('');
  const [brinco, setBrinco] = useState('');
  const [monthPregnancy, setMonthPregnancy] = useState('0');

  
  const handleAdd = () => {
    const dataToBeSaved = {
      brinco: brinco,
      tempo_gestacao: monthPregnancy,
      observacao: obs,
    }
    console.log('data:', dataToBeSaved);
  }

  return (
    <Container>
      <Forms>
        <ViewInsideScroll>
          <Field>
            <FieldName>Brinco da matriz: </FieldName>
            <Input 
              keyboardType="numeric"
              onChangeText={(e) => setBrinco(e)}
              value={brinco}
            />
          </Field>
          
          <Field>
            <FieldName>Tempo de gestação: </FieldName>
            <Input 
              keyboardType="numeric" 
              placeholder='em meses'
              onChangeText={(e) => setMonthPregnancy(e)}
              value={monthPregnancy}
            />
          </Field>
          <Field>
            <FieldName>Observação: </FieldName>
            <LongTextInput 
              onChangeText={(e) => setObs(e)}
              value={obs}
              multiline={true}
              numberOfLines={4}
            />
          </Field>
          <AddButton onPress={() => handleAdd()}>
            <ButtonText>Adicionar</ButtonText>
          </AddButton>
        </ViewInsideScroll>
      </Forms>
    </Container>
  )
}

export default AddPregnancy;
