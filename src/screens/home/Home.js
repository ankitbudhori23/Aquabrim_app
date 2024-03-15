import {FlatList, RefreshControl} from 'react-native';
import {useState, useEffect} from 'react';
import useApi from '../../components/api/Api';
import {useSelector} from 'react-redux';
import {Screen, Card} from '../../components/screens';
const Home = ({navigation}) => {
  const {user, updateData} = useSelector(state => state.initial);
  const {post, loading} = useApi();
  const [conts, setConts] = useState([]);

  const fetchConts = async () => {
    const data = new FormData();
    data.append('uname', user);
    const response = await post('getConts/', data);
    setConts(JSON.parse(response));
  };

  useEffect(() => {
    setInterval(() => {
      fetchConts();
    }, 60000);
    fetchConts();
  }, [updateData]);
  return (
    <Screen>
      <FlatList
        data={conts}
        renderItem={({item}) => <Card data={item} navigation={navigation} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              fetchConts();
            }}
          />
        }
      />
    </Screen>
  );
};

export default Home;
