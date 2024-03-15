import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
const AuthNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigations;
