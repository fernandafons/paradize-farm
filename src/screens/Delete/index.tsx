import React, { useEffect, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  Forms,
  ViewInsideScroll,
  Field,
  FieldName,
  Input,
  LongTextInput,
  InputText,
  AddButton,
  ButtonText,
} from './styles';
import { Button } from 'react-native';

const Delete: React.FC = () => {
  const [obs, setObs] = useState('');
  const [category, setCategory] = useState('');
  const [brinco, setBrinco] = useState('');
  const [price, setPrice] = useState('');
  const [sellDate, setSellDate] = useState(new Date());
  const [day, setDay] = useState(sellDate.getDate());
  const [month, setMonth] = useState(sellDate.getMonth() + 1);
  const [year, setYear] = useState(sellDate.getFullYear().toString().slice(-2));

  const type = ['Morte', 'Venda'];
  const Category = ['Bezerra', 'Novilha', 'Vaca', 'Bezerro', 'Novilho', 'Touro'];
  const [show, setShow] = useState(false);
  const [isSell, setIsSell] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setSellDate(currentDate);
    console.log(currentDate)
  };


  
  const handleDelete = () => {
    const dataToBeSaved = {
      tipo: isSell ? 'Venda' : 'Morte',
      brinco: brinco,
      categoria: category,
      valor: price,
      data_venda: sellDate,
      observacao: obs,
    }
    console.log('data:', dataToBeSaved);
  }

  useEffect(() => {
    setDay(sellDate.getDate());
    setMonth(sellDate.getMonth() + 1);
    setYear(sellDate.getFullYear().toString().slice(-2));
  }, [sellDate]);

  return (
    <Container>
      <Forms>
        <ViewInsideScroll>
          <Field>
            <FieldName>Ação: </FieldName>
            <SelectDropdown 
              data={type}
              defaultButtonText={type[0]}
              onSelect={(selectedItem, index) => {
                if (index === 1) {
                  setIsSell(true);
                } else {
                  setIsSell(false);
                }
              }}
            />
          </Field>
          <Field>
            <FieldName>Brinco: </FieldName>
            <Input 
              keyboardType="numeric"
              onChangeText={(e) => setBrinco(e)}
              value={brinco}
            />
          </Field>
          {/* TODO: if null brinco mandatory category */}
          <Field>
            <FieldName>Categoria: </FieldName>
            <SelectDropdown 
              data={Category}
              defaultButtonText={Category[0]}
              onSelect={(selectedItem) => setCategory(selectedItem)}
            />
          </Field>
          {/* TODO: data aparecendo com um dia a mais */}
          <Field>
            <FieldName>Data da venda: </FieldName>
            <Button title={`${day}/${month}/${year}`} onPress={() => setShow(true)}/>
            {show && 
              <DateTimePicker
              testID="dateTimePicker"
              value={sellDate}
              mode='date'
              onChange={onChange}
              />
            }
          </Field>
          {
            isSell &&
              <>
                <Field>
                  <FieldName>Valor: </FieldName>
                  <Input 
                    keyboardType="numeric"
                    placeholder="R$ 0.000,00"
                    onChangeText={(e) => setPrice(e)}
                    value={price}
                  />
                </Field>   
              </>
          }
          <Field>
            <FieldName>Observação: </FieldName>
            <LongTextInput 
              onChangeText={(e) => setObs(e)}
              value={obs}
              multiline={true}
              numberOfLines={4}
            />
          </Field>
          <AddButton onPress={() => handleDelete()}>
            <ButtonText>Adicionar</ButtonText>
          </AddButton>
        </ViewInsideScroll>
      </Forms>
    </Container>
  )
}

export default Delete;
