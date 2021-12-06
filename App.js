import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding : 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput 
          placeholder="Course Goal"
          style={{ width: '80%', borderBottomColor: 'black', borderWidth: 1 }}
        />
        <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}

