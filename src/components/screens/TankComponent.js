import {View} from 'react-native';
import {useTheme, TouchableRipple} from 'react-native-paper';
import {Text} from '../inputs';
const TankComponent = ({data, navigation, g}) => {
  const {colors} = useTheme();
  const handlePress = () => {
    if (g == 0) {
      navigation.navigate('tankDetails', {
        data,
      });
    } else if (g == 1) {
      navigation.navigate('temperature', {
        data,
      });
    }
  };

  return (
    <TouchableRipple
      onPress={handlePress}
      style={{
        marginTop: 15,
      }}>
      <View
        style={{
          backgroundColor: colors.primaryContainer,
          borderRadius: 10,
          height: 80,
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text size="medium">{data.name}</Text>
          <Text>{data.water_level}%</Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: colors.backdrop,
            height: 15,
            borderRadius: 15,
            overflow: 'hidden',
          }}>
          <View
            style={{
              backgroundColor:
                data.low_water_level > data.water_level
                  ? colors.error
                  : colors.primary,
              width: `${data.water_level}%`,
            }}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};

export default TankComponent;
