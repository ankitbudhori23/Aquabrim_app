import {Screen} from '../../components/screens';
import {Text} from '../../components/inputs';
import {View} from 'react-native';
const Temperature = ({route}) => {
  const {data} = route.params;
  return (
    <Screen>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            height: '90%',
          }}>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>
            {data.water_level ? 'Humidity' : 'Temperature'}
          </Text>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 40}}>{data.water_level}%</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#d0cdcd',
            height: '70%',
            width: 80,
            borderRadius: 50,
            position: 'relative',
            overflow: 'hidden',
            padding: 10,
          }}>
          <View
            style={{
              backgroundColor: '#fe7814',
              width: '100%',
              height: `${data.water_level}%`,
              position: 'absolute',
              alignSelf: 'center',
              bottom: 10,
              borderRadius: 50,
            }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default Temperature;
