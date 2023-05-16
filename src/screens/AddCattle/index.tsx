import React from 'react';

import {
  Container,
  Forms,
  Field,
  FieldName,
  Input,
  InputText,
  AddButton,
  ButtonText,
} from './styles';

const AddCattle: React.FC = () => {

  return (
    <Container>
      <Forms>
        <Field>
          <FieldName>Raça: </FieldName>
          <Input />
        </Field>
        <Field>
          <FieldName>Valor: </FieldName>
          <Input 
            keyboardType="numeric"
            placeholder="R$ 0.000,00"
          />
        </Field>
        <Field>
          <FieldName>Tipo: </FieldName>
          <Input />
        </Field>
        <Field>
          <FieldName>Quantidade: </FieldName>
          <Input keyboardType="numeric" />
        </Field>
        <AddButton>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>
      </Forms>
    </Container>
  )
}

export default AddCattle;
