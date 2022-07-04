import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';

import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import Icons from 'react-native-vector-icons/Ionicons';
import * as RNFS from 'react-native-fs';
import React, {useState, useEffect} from 'react';
import {settext, setemail, setpincode, setmobile} from '../Redux/action';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';

export default function Detail() {
  const navigation = useNavigation();

  const options = [
    {label: 'Personal Detail', value: 'detail'},
    {label: 'ID Proof', value: 'proof'},
    {label: 'Bank Detail', value: 'bank'},
  ];

  const [Usertext, setUserText] = useState('');
  const [Useremail, setUseremail] = useState('');
  const [Usermobile, setUsermobile] = useState('');
  const [Userpincode, setUserpincode] = useState('');

  const [detail, setdetail] = useState(true);
  const [proof, setproof] = useState(false);
  const [bank, setbank] = useState(false);

  const [accType, setAcctype] = useState('Saving');

  const {text, email, mobile, pincode} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();

  const Submit = () => {
    if (Usertext.length < 3) {
      alert('Name will be greater than three char');
    }
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    if (!strongRegex.test(Useremail)) {
      alert('please enter a valid email address');
      console.log('kjk');
    }
    if (
      Usertext.length > 3 &&
      strongRegex.test(Useremail) &&
      Userpincode.length === 6 &&
      Usermobile.length === 10
    ) {
      console.log('kjhjkh');
      setproof(true);
      if (proof) {
        // navigation.navigate('Home');
        setdetail(false);
        setbank(false);
      }
    }

    dispatch(settext(Usertext));
    dispatch(setemail(Useremail));
    dispatch(setpincode(Userpincode));
    dispatch(setmobile(Usermobile));
    console.log(text, email, mobile, pincode);
  };
  const handle = () => {
    console.log('navigate');
  };

  const data = () => {
    setbank(true);
    if (bank) {
      console.log(':jhgh');
      setproof(false);
      setdetail(false);
    }
  };
  //camera

  // const [front, setfront] = useState(false)
  // const [{ cameraRef }, { takePicture }] = useCamera(null);

  // const captureHandle = async () => {
  //     try {
  //         const data = await takePicture();
  //         console.log(data.uri);
  //         const filePath = data.uri;
  //         const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
  //         RNFS.moveFile(filePath, newFilePath)
  //             .then(() => {
  //                 console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
  //             })
  //             .catch(error => {
  //                 console.log(error);
  //             })
  //     } catch (error) {
  //         console.log(error);
  //     }

  // }

  return (
    <ScrollView style={styles.container}>
      {proof ? (
        <ScrollView>
          <Text
            style={{
              padding: 10,
              fontSize: 30,
              fontWeight: '700',
              color: 'black',
            }}>
            Upload KYC{' '}
          </Text>

          <View style={{flexDirection:"row"}}>
            
            <View style={{padding:10}}>
              <Text style={{color:"#64b35b",fontWeight:"700",padding:10}}>
              Personal Deatils
              </Text>
              <View style={{width:110,height:10,backgroundColor:"#64b35b",borderRadius:20}}></View>
            </View>
            <View style={{padding:10}}>
              <Text style={{color:"#64b35b",fontWeight:"700",padding:10}}>
             ID Proof
              </Text>
              <View style={{width:100,height:10,backgroundColor:"#64b35b",borderRadius:20}}></View>
            </View>
            <View style={{padding:10}}>
              <Text style={{color:"grey",fontWeight:"700",padding:10}}>
              Bank Deatil
              </Text>
              <View style={{width:100,height:10,backgroundColor:"grey",borderRadius:20}}></View>
            </View>
  
            </View>
        

          <Text style={styles.detail}>Choose Document Type</Text>

          <View style={styles.buttonContainers}>
            <View style={{padding: 8}}>
              <TouchableOpacity style={[styles.appButton, {backgroundColor: accType == 'Savings' ? 'green' : '#A9A9A9'},]}>
                <Text style={styles.apptext}>Aadhar Card</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 8}}>
              <TouchableOpacity
                style={[
                  styles.appButton,
                  {backgroundColor: accType == 'Saving' ? 'green' : '#A9A9A9'},
                ]}
                onPress={() => setAcctype('Saving')}>
                <Text style={styles.apptext}> Pan Card</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 8}}>
              <TouchableOpacity
                style={[
                  styles.appButton,
                  {backgroundColor: accType == 'Current' ? 'green' : '#A9A9A9'},
                ]}
                onPress={() => setAcctype('Current')}>
                <Text style={styles.apptext}>DrivingLicense</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.detail}>Card Id Proof</Text>
          <Text style={styles.texts}>
            After successful login, the user will select File Upload from the
            main menu and upload the input file
          </Text>
          <View style={{marginTop:100,marginLeft:10}}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={data}>
            <Text style={styles.appButtonText}>Next</Text>
          </TouchableOpacity>
          </View>
         
          {/* <ScrollView style={styles.body}>
        {
            front ? (
                <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.front}
                style={styles.preview}
            >  
            <View style={{  display:"flex",
                flexDirection:"row",}}>
                
                  <TouchableOpacity
                  onPress={() => captureHandle()} 
                  style={{
                width:70,
                height:70,
                borderRadius:50,
                // backgroundColor:"red",
                borderColor:"white",
                marginBottom:30,
                borderWidth: 4,
                marginLeft:100,
            }}>
   
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => setfront(!front)}  
   >
               <Icons name="camera-reverse-sharp" color='white' size={40}   style={{marginLeft:90,marginTop:20}} />

            </TouchableOpacity>
   
            </View>
           
               {/* <Button
                    title="Capture"
                    color='#1eb900'
                    onPress={() => captureHandle()}
                />  */}
          {/* </RNCamera>
            ):(
                <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
            <View style={{  display:"flex",
                flexDirection:"row",}}>
                
                  <TouchableOpacity
                  onPress={() => captureHandle()} 
                  style={{
                width:70,
                height:70,
                borderRadius:50,
                // backgroundColor:"red",
                borderColor:"white",
                marginBottom:30,
                borderWidth: 4,
                marginLeft:100,
            }}>
   
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => setfront(true)}  
   >
               <Icons name="camera-reverse-sharp" color='white' size={40}   style={{marginLeft:90,marginTop:20}} />

            </TouchableOpacity>
   
            </View>
            </RNCamera>  
            )

        }
        </View>  */}
        </ScrollView>
      ) : bank ? (
        <View>
          <Text
            style={{
              padding: 10,
              fontSize: 30,
              fontWeight: '700',
              color: 'black',
            }}>
            Upload KYC{' '}
          </Text>
          <View style={{flexDirection:"row"}}>
            
            <View style={{padding:10}}>
              <Text style={{color:"#64b35b",fontWeight:"700",padding:10}}>
              Personal Deatils
              </Text>
              <View style={{width:110,height:10,backgroundColor:"#64b35b",borderRadius:20}}></View>
            </View>
            <View style={{padding:10}}>
              <Text style={{color:"#64b35b",fontWeight:"700",padding:10}}>
             ID Proof
              </Text>
              <View style={{width:100,height:10,backgroundColor:"#64b35b",borderRadius:20}}></View>
            </View>
            <View style={{padding:10}}>
              <Text style={{color:"#64b35b",fontWeight:"700",padding:10}}>
              Bank Deatil
              </Text>
              <View style={{width:100,height:10,backgroundColor:"#64b35b",borderRadius:20}}></View>
            </View>
  
            </View>
        
          <View style={[styles.container, {margin: 15}]}>
            <Text style={styles.heading}>Enter Your Account Details</Text>
            <View style={styles.buttonContainers}>
              <TouchableOpacity style={styles.appButtonContainers}>
                <Text style={styles.appButtonTexts}>Account Type</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.appButtonContainers,
                  {backgroundColor: accType == 'Saving' ? 'green' : '#A9A9A9'},
                ]}
                onPress={() => setAcctype('Saving')}>
                <Text style={styles.appButtonTexts}>Saving </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.appButtonContainers,
                  {backgroundColor: accType == 'Current' ? 'green' : '#A9A9A9'},
                ]}
                onPress={() => setAcctype('Current')}>
                <Text style={styles.appButtonTexts}>Current</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>UserName</Text>
            <TextInput
              placeholder="Account UserName"
              style={styles.input}
              // onChangeText={(value) => setUserName(value)}
              //value={userName}
            />
            <Text style={styles.text}>Acc Number</Text>
            <TextInput
              placeholder="Account Number"
              style={styles.input}
              // onChangeText={(value) => setUserName(value)}
              //value={userName}
            />
            <Text style={styles.text}>Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              style={styles.input}
              // onChangeText={(value) => setUserName(value)}
              //value={userName}
            />
            <Text style={styles.text}>IFSC Code</Text>
            <TextInput
              placeholder="IFSC Code"
              style={styles.input}
              // onChangeText={(value) => setUserName(value)}
              //value={userName}
            />
            <View style={{marginLeft: 20,paddingBottom:10}}>
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => console.log("Data Submited")}>
                <Text style={styles.appButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text
            style={{
              padding: 10,
              fontSize: 30,
              fontWeight: '700',
              color: 'black',
            }}>
            Upload KYC
          </Text>
          <View style={{flexDirection:"row"}}>
            
          <View style={{padding:10}}>
            <Text style={{color:"#64b35b",fontWeight:"700",padding:10}}>
            Personal Deatils
            </Text>
            <View style={{width:110,height:10,backgroundColor:"#64b35b",borderRadius:20}}></View>
          </View>
          <View style={{padding:10}}>
            <Text style={{color:"grey",fontWeight:"700",padding:10}}>
           ID Proof
            </Text>
            <View style={{width:100,height:10,backgroundColor:"grey",borderRadius:20}}></View>
          </View>
          <View style={{padding:10}}>
            <Text style={{color:"grey",fontWeight:"700",padding:10}}>
            Bank Deatil
            </Text>
            <View style={{width:100,height:10,backgroundColor:"grey",borderRadius:20}}></View>
          </View>

          </View>
          {/* <SwitchSelector
            options={options}
            textColor="#64b35b"
            selectedColor="white"
            buttonColor="#64b35b"
            onPress={handle}
            initial={0}
          /> */}

          <View style={{padding: 10}}>
            <Text style={styles.detail}>Enter Your Details</Text>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUserText}
              value={Usertext}
              clearButtonMode="always"
              placeholder="name"
            />
            <Text style={styles.text}>Mobile</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsermobile}
              keyboardType="phone-pad"
              maxLength={10}
              value={Usermobile}
              placeholder="Mobile"
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUseremail}
              keyboardType="email-address"
              value={Useremail}
              placeholder="Email"
            />
            <Text style={styles.text}>Pincode</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUserpincode}
              keyboardType="numeric"
              maxLength={6}
              value={Userpincode}
              placeholder="Pincode"
            />
            <View style={{marginLeft: 20}}>
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={Submit}>
                <Text style={styles.appButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
    height: '100%',
  },
  detail: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'rgb(233,247,239)',
    borderRadius: 15,
    margin: 10,
    paddingLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  texts: {
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: -10,
    paddingLeft: 20,
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  // containers: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#CDD5E2',
  //   flex: 1,
  // },
  // button: {},
  // next: {
  //   backgroundColor: 'black',
  //   height: 30,
  //   padding: 20,
  //   width: 290,
  //   borderRadius: 15,
  //   margin: 30,
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'red',
  // },
  appButtonContainer: {
    marginTop: 10,
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    height: 35,
    width: 350,
    // paddingLeft:10
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonContainers: {
    marginTop: 10,
    marginLeft: 10,
    elevation: 8,
    backgroundColor: '#A9A9A9',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    height: 30,
    width: 80,
  },
  appButtonTexts: {
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
  buttonContainers: {
    flexDirection: 'row',
    margin: 10,
  },
  appButton: {
    width: 115,
    height: 40,
    borderRadius: 100,
    padding: 8,
  },
  apptext: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
