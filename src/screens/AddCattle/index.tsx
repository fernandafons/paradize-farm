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

const AddCattle: React.FC = () => {
  const [female, setFemale] = useState(true);
  const [obs, setObs] = useState('');
  const [age, setAge] = useState(0);
  const [brinco, setBrinco] = useState('');
  const [brincoMae, setBrincoMae] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [almojada, setAlmojada] = useState(true);
  const [date, setDate] = useState(new Date());
  const [monthPregnancy, setMonthPregnancy] = useState('0');
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

  
  const handleAdd = () => {
    const today = new Date();
    const ageInMonths = age ? age : 
      today.getMonth() + 1 - date.getMonth() + 1;

    const setCategory = () => {
      if (female) {
        if (ageInMonths < 12) {
          return 'Bezerra'
        } else if (ageInMonths > 12 && ageInMonths < 36) {
          return 'Novilha'
        } else {
          return 'Vaca'
        };
      }
      if (ageInMonths < 12) {
        return 'Bezerro'
      } else if (ageInMonths > 12 && ageInMonths < 36) {
        return 'Novilho'
      } else {
        return 'Touro'
      };
    }

    const dataToBeSaved = {
      tipo: isPurchase ? 'Compra' : 'Nascimento',
      sexo: female ? 'Femea' : 'Macho',
      brinco: brinco,
      categoria: setCategory(),
      brinco_mae: brincoMae,
      nome: name,
      peso: weight,
      valor: price,
      almojada: almojada,
      tempo_gestacao: monthPregnancy,
      idade_meses: ageInMonths,
      data_nascimento: date,
    }
    console.log('data:', dataToBeSaved);
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
            <Input 
              keyboardType="numeric"
              onChangeText={(e) => setBrinco(e)}
              value={brinco}
            />
          </Field>
          <Field>
            <FieldName>Nome: </FieldName>
            <Input
              onChangeText={(e) => setName(e)}
              value={name}
            />
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
                <Input 
                  keyboardType="numeric"
                  onChangeText={(e) => setBrincoMae(e)}
                  value={brincoMae}
                />
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
                  onChangeText={(e) => setAge(e)}
                />
              </Field>
              <Field>
                <FieldName>Peso: </FieldName>
                <Input 
                  keyboardType="numeric" 
                  placeholder='em kg'
                  onChangeText={(e) => setWeight(e)}
                  value={weight}
                />
              </Field>
              <Field>
                <FieldName>Valor: </FieldName>
                <Input 
                  keyboardType="numeric"
                  placeholder="R$ 0.000,00"
                  onChangeText={(e) => setPrice(e)}
                  value={price}
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
                        onChangeText={(e) => setMonthPregnancy(e)}
                        value={monthPregnancy}
                      />
                  </Field>
                  }
                </>
              }
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
          <AddButton onPress={() => handleAdd()}>
            <ButtonText>Adicionar</ButtonText>
          </AddButton>
        </ViewInsideScroll>
      </Forms>
    </Container>
  )
}

export default AddCattle;
