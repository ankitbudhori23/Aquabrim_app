import {View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {windowPaddingHorizontal} from '../../utils/Dimentions';
import {useTheme} from 'react-native-paper';
export default function Screen({children, style, NoHeader = false, ...props}) {
  const height = StatusBar.currentHeight || 0;
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1, marginTop: NoHeader ? height : 0}}>
      {/* <ScrollView
        contentContainerStyle={{flexGrow: 1, ...style}}
        {...props}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"> */}
      <View
        style={{
          paddingHorizontal: windowPaddingHorizontal,
          backgroundColor: theme.colors.background,
          flexGrow: 1,
          width: '100%',
          ...style,
        }}>
        {children}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
