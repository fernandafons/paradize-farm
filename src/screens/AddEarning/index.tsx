import React from 'react';

import {
  Container,
  Forms,
  Field,
  FieldName,
  Input,
  AddButton,
  ButtonText,
} from './styles';

const AddEarning: React.FC = () => {

  return (
    <Container>
      <Forms>
        <Field>
          <FieldName>Nome: </FieldName>
          <Input />
        </Field>
        <Field>
          <FieldName>Valor: </FieldName>
          <Input 
            keyboardType="numeric"
            placeholder="R$ 000,00"
          />
        </Field>
        <AddButton>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>
      </Forms>
    </Container>
  )
}

export default AddEarning;
