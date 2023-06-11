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
  InputText,
  AddButton,
  ButtonText,
} from './styles';
import { Button } from 'react-native';

const AddCattle: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Nascimento');
  const [female, setFemale] = useState(true);
  const [almojada, setAlmojada] = useState(true);
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear().toString().slice(-2));

  const type = ['Nascimento', 'Compra'];
  const genre = ['Femea', 'Macho']; 
  const almojadaOptions = ['Sim', 'Não']; 
  const [show, setShow] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    console.log(currentDate)
  };

  const handleGenre = (selectedItem) => {
    if (selectedItem === 'Femea') {
      setFemale(true);
      } else {
        setFemale(false);
    }
  }

  const handleAlmojada = (selectedItem) => {
    if (selectedItem === 'Sim') {
      setAlmojada(true);
      } else {
        setAlmojada(false);
    }
  }

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear().toString().slice(-2));
  }, [date]);

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
              onSelect={(selectedItem) => handleGenre(selectedItem)}
            />
          </Field>
          <Field>
            <FieldName>Brinco: </FieldName>
            <Input keyboardType="numeric" />
          </Field>
          <Field>
            <FieldName>Nome: </FieldName>
            <Input />
          </Field>
          {!isPurchase && 
            <>
              <Field>
                <FieldName>Data de nascimento: </FieldName>
                <Button title={`${day}/${month}/${year}`} onPress={() => setShow(true)}/>
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
                <FieldName>Brinco da mãe: </FieldName>
                <Input keyboardType="numeric" />
              </Field>
            </>
          }
          {isPurchase &&
            <>
              <Field>
                <FieldName>Idade: </FieldName>
                <Input 
                  keyboardType="numeric" 
                  placeholder='em meses'
                />
              </Field>
              <Field>
                <FieldName>Peso: </FieldName>
                <Input 
                  keyboardType="numeric" 
                  placeholder='em kg'
                />
              </Field>
              <Field>
                <FieldName>Valor: </FieldName>
                <Input 
                  keyboardType="numeric"
                  placeholder="R$ 0.000,00"
                />
              </Field>
              {female &&
                <>
                  <Field>
                    <FieldName>Almojada: </FieldName>
                    <SelectDropdown 
                      data={almojadaOptions}
                      defaultButtonText={almojadaOptions[0]}
                      onSelect={(selectedItem) => handleAlmojada(selectedItem)}
                    />
                  </Field>
                  {almojada &&
                    <Field>
                      <FieldName>Tempo de gestação: </FieldName>
                      <Input 
                        keyboardType="numeric" 
                        placeholder='em meses'
                      />
                  </Field>
                  }
                </>
              }
            </>
          }
          <AddButton>
            <ButtonText>Adicionar</ButtonText>
          </AddButton>
        </ViewInsideScroll>
      </Forms>
    </Container>
  )
}

export default AddCattle;
