import {Screen} from '../../components/screens';
import {Text} from '../../components/inputs';
import {useEffect, useState} from 'react';
import useApi from '../../components/api/Api';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const FlowMeter = ({route}) => {
  const [tanks, setTanks] = useState();
  const {post} = useApi();
  const fetchConts = async () => {
    const data = new FormData();
    data.append('devid', route.params.devid);
    const response = await post('getTanks/', data);

    setTanks(JSON.parse(response));
  };
  useEffect(() => {
    fetchConts();
  }, []);
  return (
    <Screen>
      {!tanks ? (
        <ActivityIndicator
          size="large"
          color="#4444da"
          style={{marginTop: 20}}
        />
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 3,
                  justifyContent: 'flex-end',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 35}}>
                  {tanks[4]?.water_level}
                </Text>
                <View style={{justifyContent: 'flex-end'}}>
                  <Text style={{fontSize: 15, marginBottom: 5}}>KL/HR</Text>
                </View>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 35}}>Flow Rate</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 3,
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    {tanks[2]?.water_level}
                  </Text>
                  <View style={{justifyContent: 'flex-end'}}>
                    <Text style={{fontSize: 15, marginBottom: 5}}>KL</Text>
                  </View>
                </View>
                <Text size="medium">Today's Quantity</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 3,
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    {tanks[1]?.water_level}
                  </Text>
                  <View style={{justifyContent: 'flex-end'}}>
                    <Text style={{fontSize: 15, marginBottom: 5}}>KL</Text>
                  </View>
                </View>
                <Text size="medium">Recent Quantity</Text>
              </View>
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 3,
                  justifyContent: 'flex-end',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>
                  {tanks[3]?.water_level}
                </Text>
                <View style={{justifyContent: 'flex-end'}}>
                  <Text style={{fontSize: 15, marginBottom: 5}}>KL</Text>
                </View>
              </View>
              <Text size="medium">Totalizer</Text>
            </View>
          </View>
        </View>
      )}
    </Screen>
  );
};

export default FlowMeter;
