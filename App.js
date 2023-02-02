import Main from './src/pages/main';
import Content from './src/pages/content';
import Contato from './src/pages/Contato';
import Agendamento from './src/pages/agendamento';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Provider from './src/context/provider';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}
    >
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='Content' component={Content} />
      <Stack.Screen name='Agendamento' component={Agendamento} />
      <Stack.Screen name='Contato' component={Contato} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

