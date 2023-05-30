import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

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
import { Button } from 'react-native';

const AddCattle: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const type = ['Nascimento', 'Compra'];
  const genre = ['Femea', 'Macho']; 
  const [show, setShow] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    console.log(currentDate)
  };

  return (
    <Container>
      <Forms>
        <Field>
          <FieldName>Ação: </FieldName>
          <SelectDropdown 
            data={type}
            defaultButtonText={type[0]}
            onSelect={(selectedItem, index) => {
              if (index === 1) {
                setIsPurchase(true);
              } else {
                setIsPurchase(false);
              }
            }}
          />
        </Field>
        <Field>
          <FieldName>Sexo: </FieldName>
          <SelectDropdown 
            data={genre}
            defaultButtonText={genre[0]}
            onSelect={() => console.log('hey')}
          />
        </Field>
        <Field>
          <FieldName>Data de nascimento: </FieldName>
          <Button title={toString(date)} onPress={() => setShow(true)}/>
          {show && 
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            onChange={onChange}
            />
          }
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
