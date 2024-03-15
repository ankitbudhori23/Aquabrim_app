import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Tanks from '../screens/home/Tanks';
import TankDetails from '../screens/home/TankDetails';
import Temperature from '../screens/home/Temperature';
import FlowMeter from '../screens/home/FlowMeter';
import {Menu, IconButton} from 'react-native-paper';
import {useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserLogout} from '../redux/slices/InitialSlice';
import {Text} from '../components/inputs';
const AppNavigations = () => {
  const [visible, setVisible] = useState(false);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'AquaBrim',
          headerRight: () => (
            <Menu
              visible={visible}
              style={{marginTop: StatusBar.currentHeight || 0}}
              onDismiss={() => setVisible(false)}
              anchor={
                <IconButton
                  icon="dots-vertical"
                  onPress={() => setVisible(true)}
                />
              }>
              <Menu.Item
                onPress={() => {
                  dispatch(setUserLogout());
                }}
                title="Logout"
              />
            </Menu>
          ),
        }}
      />
      <Stack.Screen
        name="tanks"
        component={Tanks}
        options={({route}) => ({
          title: route.params.title,
          headerRight: () => (
            <Text style={{paddingRight: 15}}>ID - {route.params.devid}</Text>
          ),
        })}
      />
      <Stack.Screen
        name="tankDetails"
        component={TankDetails}
        options={({route}) => ({title: route.params.data.name})}
      />
      <Stack.Screen
        name="temperature"
        component={Temperature}
        options={({route}) => ({title: route.params.data.name})}
      />
      <Stack.Screen
        name="flowmeter"
        component={FlowMeter}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default AppNavigations;
