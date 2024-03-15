import {useEffect, useState} from 'react';
import {Screen, TankComponent} from '../../components/screens';
import {Text} from '../../components/inputs';
import useApi from '../../components/api/Api';
import {Alert, FlatList, RefreshControl, View, Button} from 'react-native';
import AlertComponent from '../../components/screens/AlertComponent';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {updateData} from '../../redux/slices/InitialSlice';
const Tanks = ({route, navigation}) => {
  const [tanks, setTanks] = useState();
  const {post, loading} = useApi();
  const dispatch = useDispatch();
  const [Motor, setMotor] = useState(0);
  const fetchConts = async () => {
    try {
      const data = new FormData();
      data.append('devid', route.params.devid);
      const response = await post('getTanks/', data);
      setTanks(JSON.parse(response));
    } catch (err) {
      console.log('error', err);
    }
  };
  useEffect(() => {
    setInterval(() => {
      fetchConts();
    }, 60000);
    fetchConts();
  }, []);
  const TurnOnOff = async onoff => {
    try {
      const data = new FormData();
      data.append('devid', route.params.devid);
      data.append('onoff', onoff);
      const response = await post('onoffmachine/', data);
      if (response === 'ok') {
        setMotor(e => !e);
        dispatch(updateData());
        AlertComponent({
          title: `Motor turned ${onoff === 1 ? 'off' : 'on'}`,
          type: 'success',
        });
      } else {
        AlertComponent({
          title: 'Something went wrong',
          type: 'danger',
        });
      }
    } catch (err) {
      // console.log('error', err);
    }
  };
  const HandlePress = async data => {
    Alert.alert(
      `Turn ${data} the Motor`,
      `Do you want to turn ${data} the Motor`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {text: 'OK', onPress: () => TurnOnOff(data === 'on' ? 0 : 1)},
      ],
    );
  };
  return (
    <Screen>
      <FlatList
        style={{marginBottom: 120}}
        data={tanks}
        renderItem={({item}) => (
          <TankComponent
            data={item}
            navigation={navigation}
            g={route.params.g}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              fetchConts();
            }}
          />
        }
      />
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#ffffffff',
          padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Text size="medium">Motor Status : </Text>

          {Motor ? (
            <Text size="medium">Waiting</Text>
          ) : !route.params.cerr ? (
            route.params.on === 2 ? (
              <Text size="medium">Waiting</Text>
            ) : (
              <Button
                title={route.params.on ? 'ON' : 'OFF'}
                color={route.params.on ? 'red' : 'green'}
                onPress={() => HandlePress(route.params.on ? 'off' : 'on')}
              />
            )
          ) : (
            <Text size="medium">Error</Text>
          )}
        </View>
        <Text style={{marginBottom: 3}}>
          Motor {route.params.on ? 'ON' : 'OFF'} at -
          {moment(route.params.laston).format('lll')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <View
            style={[
              styles.indicator,
              {
                backgroundColor: route.params.terr ? '#d72626' : '#ffffff00',
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                color: route.params.terr ? '#ffffff' : '#000000ff',
              }}>
              Timeout
            </Text>
          </View>
          <View
            style={[
              styles.indicator,
              {
                backgroundColor: route.params.cerr ? '#de2d2d' : '#ffffff00',
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                color: route.params.cerr ? '#ffffff' : '#000000ff',
              }}>
              Comm err
            </Text>
          </View>
          <View
            style={[
              styles.indicator,
              {
                backgroundColor: route.params.ferr ? '#e83737' : '#ffffff00',
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                color: route.params.ferr ? '#ffffff' : '#000000ff',
              }}>
              flow err
            </Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: 100,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Tanks;
