import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Text, Input, Button, Image } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../type';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';
import { API_URL } from 'react-native-dotenv';
interface RegisterScreenProps {
  onRegister: () => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ onRegister }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading]=useState(false)
  const navigation = useNavigation<AuthNavigationProp>();

  const handleRegister = async () => {
  
    const userData={
      name:name,
      email:email,
      mobile:mobile,
      password:password
    }
   
    if (!name || !email || !mobile || !password) {
      Toast.show({
        type: 'error',
        text1: 'Registration Failed',
        // text2: 'All fields are required', // Show error message if any field is empty
      });
      return;
    }
    setIsLoading(true)
    navigation.navigate('Login')
    try {
     
      const response = await axios.post(`${API_URL}/register`, userData);
      console.log(response.data);

     Toast.show({
      type: 'success',
      text1: 'Registered Successful',
      text2: `Login to continue`,
    });
      navigation.navigate('Login')
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Unable to register ',
        text2: `Try Again Later!`,
      });
      console.error("Axios error:", error);
    }finally{
      setIsLoading(false)
    }
    // onRegister(); // Update the state in App.tsx to navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.pristineContainer}>

          <Text style={styles.HeadingPris}>Register</Text>
          {/* <Image
            source={require('/home/mohammad-owais/Android/AppMern/src/images/drop.png')} // Adjust path if needed
            style={styles.gif}
          /> */}
          </View>
      <Text style={styles.Heading}>Now!</Text>
     
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>SignUp</Text>
      </Button>
      <Modal
        visible={isLoading}
        transparent
        animationType="fade"
        onRequestClose={() => setIsLoading(false)}
      >
        <View style={styles.modalContainer}>
          <LottieView
            source={require('../images/cleanfinal.json')} // Replace with your loading animation path
            autoPlay
            loop
            style={styles.lottie}
          />
        
        </View>
      </Modal>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 40,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  Heading: {
  
    bottom:170,
    right:-100,
    padding:20,
    fontSize:60,
    fontWeight:'bold',
   
  },
  button: {
    bottom:120,
    backgroundColor: '#8688ff',
    borderRadius: 12,
    marginVertical: 16,
    width: 150,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  },
  buttonText: {
    color: '#f9f9f9',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    bottom:160,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderColor: '#cccccc',
    borderRadius: 8,
    borderBottomWidth: 2,
    width: '100%',
    marginVertical: 8,
  },
  pristineContainer: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Centers items vertically
    marginTop:300,
    marginLeft:-40
  },
  HeadingPris:{
    color:"#8688ff",
    marginBottom:-100,
    bottom:200,
    padding:20,
    fontSize:60,
    fontWeight:'bold',
    fontFamily:''

},
gif: {
  bottom:150,
  tintColor:'#8688ff',
  width: 60, // Adjust the size of the GIF
  height: 60,
},
signUp:{
  color:"#8688ff",
  fontWeight:'bold',
  bottom:140,
  left:100,
  fontSize:30
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
},
lottie: {
  width: 200,
  height: 200,
},
});
