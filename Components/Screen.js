import { View, Text } from 'react-native'
import React,{useState}from 'react'
import Detail from './Detail'
import {useNavigation} from '@react-navigation/native';
import SwitchSelector from "react-native-switch-selector";
// import QRCodeScanner from 'react-native-qrcode-scanner';
export default function Screen() {

  return (
    <View>

{/* <View style={styles.sectionContainer}>
                <QRCodeScanner
                  reactivate={true}
                  showMarker={true}
                  //ref={(node) => { scanner = node }}
                  onRead={onSuccess}
                  topContent={
                    <Text style={styles.centerText}>
                      Scan your QRCode!
                    </Text>
                  }
                  bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigation.goBack()}>
                      <Text style={styles.buttonText}>Cancel Scan</Text>
                    </TouchableOpacity>
                  }
                />
              </View> */}
      <Detail />
    </View>
  )
}