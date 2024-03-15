import {View} from 'react-native';
import React from 'react';
import {Text} from '../inputs';
const NoInternet = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#e60404cb',
        width: '100%',
        padding: 10,
        height: 50,
        zIndex: 100,
      }}>
      <Text size="medium" style={{color: 'white', textAlign: 'center'}}>
        No internet connection!
      </Text>
    </View>
  );
};

export default NoInternet;
