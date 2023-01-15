import React from 'react';
import {Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'lightgray',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text>Kosong masih belum ada item</Text>
        </View>
        <View
          style={{
            backgroundColor: 'gray',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View
            style={{
              backgroundColor: 'yellow',
              height: 30,
              width: 30,
            }}></View>
          <View
            style={{
              backgroundColor: 'white',
              height: 30,
              width: 30,
            }}></View>
          <View
            style={{
              backgroundColor: 'white',
              height: 30,
              width: 30,
            }}></View>
        </View>
      </View>
    );
  }
}
