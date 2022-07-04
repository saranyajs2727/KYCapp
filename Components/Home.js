import { View, Text,Button } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={{marginTop:100}}>
   
      <Button
        title="click"
        onPress={() => navigation.navigate('Screen')}
      />
      
    </View>
  )
}