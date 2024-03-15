import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {DarkTheme, LightTheme} from './utils/Theme';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigations from './navigations/AuthNavigations';
import AppNavigations from './navigations/AppNavigations';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './components/screens/NoInternet';

const LightMode = {
  ...MD3LightTheme,
  colors: LightTheme,
};

const DarkMode = {
  ...MD3DarkTheme,
  colors: DarkTheme,
};

const App = () => {
  const {isDark, isUserLoggedIn} = useSelector(state => state.initial);
  const theme = isDark ? DarkMode : LightMode;
  const [connet, setConnet] = useState();
  useEffect(() => {
    SplashScreen.hide();
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setConnet(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      {connet && <NoInternet />}
      <NavigationContainer>
        {isUserLoggedIn ? <AppNavigations /> : <AuthNavigations />}
      </NavigationContainer>
      <FlashMessage />
    </PaperProvider>
  );
};

export default App;
