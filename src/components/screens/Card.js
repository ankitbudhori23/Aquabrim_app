import {View} from 'react-native';
import {TouchableRipple, useTheme} from 'react-native-paper';
import {useState} from 'react';
import {Text} from '../inputs';
const Card = ({data, navigation}) => {
  const {colors} = useTheme();
  const g = data.graphical_or_not;
  const [error] = useState(
    data.comm_error_alarm_rx || data.flow_error_alarm || data.comm_error_alarm,
  );

  return (
    <TouchableRipple
      onPress={() => {
        if (g == 2) {
          navigation.navigate('flowmeter', {
            title: data.name,
            devid: data.device_id,
          });
        } else {
          navigation.navigate('tanks', {
            title: data.name,
            devid: data.device_id,
            g: data.graphical_or_not,
            on: data.onoff,
            laston: data.last_motor_on_time,
            lastoff: data.last_motor_off_time,
            terr: data.timeout_alarm,
            cerr: data.comm_error_alarm,
            ferr: data.flow_error_alarm,
          });
        }
      }}
      style={{
        marginTop: 10,
      }}>
      <View
        style={{
          borderRadius: 10,
          padding: 15,
          backgroundColor: colors.primaryContainer,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            size="medium"
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              flex: 1,
              textTransform: 'capitalize',
            }}>
            {data.name}
          </Text>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: error ? '#ff0000' : 'green',
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <View style={{gap: 3}}>
            <Text>Last Updated - {data.get_last_update}</Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default Card;
