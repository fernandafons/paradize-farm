import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './src/screens/Register';
import Expenses from './src/screens/Expenses';
import Earnings from './src/screens/Earnings';
import { Container } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();
  // const Stack = createNativeStackNavigator();
  return (
    <Container>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Cadastro') {
                return <MaterialCommunityIcons name="cow" size={24} color="black" />;
              } else if (route.name === 'Despesas') {
                return <MaterialIcons name="attach-money" size={24} color="black" />;
              } else if (route.name === 'Ganhos') {
                return <FontAwesome name="money" size={24} color="black" />;
              }
            },
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
          <Tab.Screen name="Cadastro" component={Register} />
          <Tab.Screen name="Despesas" component={Expenses} />
          <Tab.Screen name="Ganhos" component={Earnings} />
        </Tab.Navigator>
        </NavigationContainer>
    </Container>
  );
}
