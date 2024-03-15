import {View, Image, StyleSheet} from 'react-native';
import {Text} from '../../components/inputs';
import {Screen} from '../../components/screens';
import moment from 'moment';
const TankDetails = ({route}) => {
  const data = route.params.data;
  return (
    <Screen>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
          marginBottom: 50,
          gap: 5,
        }}>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: data.current_overflow_status
                ? '#239c04'
                : '#ffffff00',
            },
          ]}>
          <Text
            style={{
              color: data.current_overflow_status ? '#ffffff' : '#000000ff',
            }}>
            Over flow
          </Text>
        </View>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: data.current_flow_status
                ? '#239c04'
                : '#ffffff00',
            },
          ]}>
          <Text
            style={{color: data.current_flow_status ? '#ffffff' : '#000000ff'}}>
            Flow Status
          </Text>
        </View>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: data.no_signal_alarm ? '#e8b53f' : '#ffffff00',
              color: data.no_signal_alarm ? '#ffffff' : '#000000ff',
            },
          ]}>
          <Text style={{color: data.no_signal_alarm ? '#ffffff' : '#000000ff'}}>
            No Singnal
          </Text>
        </View>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: !data.motorized_valve_status
                ? '#239c04'
                : '#ffffff00',
              color: !data.motorized_valve_status ? '#ffffff' : '#000000ff',
            },
          ]}>
          <Text
            style={{
              color: !data.motorized_valve_status ? '#ffffff' : '#000000ff',
            }}>
            Open Valve
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '60%',
          position: 'relative',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/tank2.png')}
          style={{
            width: '80%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: 50,
            overflow: 'hidden',
          }}
        />
        <View
          style={{
            position: 'absolute',
            height: '94%',
            bottom: 0,
            width: '76%',
            borderRadius: 50,
            alignItems: 'center',
          }}>
          <View
            style={{
              marginBottom: `${data.full_water_level}%`,
              position: 'absolute',
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#229c045f',
              bottom: 0,
              zIndex: 1,
            }}>
            <Text
              style={{
                textAlign: 'right',
                position: 'absolute',
                right: -40,
                top: -10,
              }}>
              {data.full_water_level}%
            </Text>
            <Text
              style={{
                textAlign: 'left',
                position: 'absolute',
                left: -40,
                top: -10,
              }}>
              Max
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              height: '100%',
              bottom: 0,
              width: '100%',
              borderRadius: 50,
              overflow: 'hidden',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: `${data.water_level}%`,
                backgroundColor: '#3ce0eccc',
                position: 'absolute',
                bottom: 3,
                width: '100%',
                borderBottomEndRadius: 55,
                borderBottomStartRadius: 55,
              }}
            />
          </View>
          <View
            style={{
              marginBottom: `${data.low_water_level}%`,
              position: 'absolute',
              bottom: 0,
              width: '100%',
              zIndex: 1,
              borderBottomWidth: 1,
              borderBottomColor: '#ed4b155c',
            }}>
            <Text
              style={{
                textAlign: 'right',
                position: 'absolute',
                right: -40,
                top: -10,
              }}>
              {data.low_water_level}%
            </Text>
            <Text
              style={{
                textAlign: 'left',
                position: 'absolute',
                left: -40,
                top: -10,
              }}>
              Min
            </Text>
          </View>
        </View>
      </View>
      <Text size="large" style={{alignSelf: 'center'}}>
        {data.water_level}%
      </Text>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text>Last Updated : {moment(data.updated).format('lll')}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 60,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default TankDetails;
