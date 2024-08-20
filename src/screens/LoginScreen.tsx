import { StyleSheet,  View ,Image, Alert} from 'react-native'
import { Text, Stack, Input, YStack, Button } from 'tamagui'
import React, {useEffect, useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../type';
import RegisterScreen from './RegisterScreen';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface LoginScreenProps {
  onLogin: () => void;
}
const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<AuthNavigationProp>();

  const handleLogin = () => {
    
    const userData={
      email:email, 
      password:password
    }
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        // text2: 'All fields are required', // Show error message if any field is empty
      });
      return;
    }
    try{
      
    axios.post("http://192.168.63.231:5001/login-user", userData).then(res=>{
      console.log(email, password)
      console.log(res.data);
      if (res.data.status == 'ok') {
        console.log(email,password)
     
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        AsyncStorage.setItem('userType',res.data.userType)
       onLogin()
       Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: `Welcome back! ${userData.name}`,
      });
      }
    });
    // Handle login logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    
    }catch(error){
      console.log(error)
    }
  };
  
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    
    // console.log(data, 'at app.jsx');
  
  }
  useEffect(()=>{
    getData();
  
  },[])
  const handleRegister= ({})=>{
    navigation.navigate('Register')
  }

  return (
    <>
  
      
    <View style={styles.container}>
   
    <LinearGradient
      colors={['#ffffff', '#8688ff']} // Colors from top-left to bottom-right
      style={styles.containertwo}
    />
       <Text style={styles.Heading}>
          Hi!  Welcome    to
        </Text>
        
        <View style={styles.pristineContainer}>

        <Text style={styles.HeadingPris}>Pristine</Text>
        <Image
           source={require('/home/mohammad-owais/Android/AppMern/src/images/drop.png')} // Adjust path if needed
           style={styles.gif}
        />
      </View>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input} // Apply styles from the stylesheet
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input} // Apply styles from the stylesheet
          secureTextEntry
        />
       <View style={styles.buttonContainer}>
          <Button
          onPress={handleLogin}
          style={styles.button} // Applying styles from the stylesheet
        >

          <Text style={styles.buttonText}>Login</Text>

        </Button>
        <Button
      
        onPress={handleRegister} // Navigate to the Register screen
        style={styles.button}
      >
        <Text style={styles.registerButtonText}>Sign Up!</Text>
      </Button>
      </View>
        <LinearGradient
      colors={['#ffffff', '#8688ff']} // Colors from top-left to bottom-right
      style={styles.container}
    />
    </View>
   
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    // paddingVertical: 300,
    // paddingHorizontal:20,
    backgroundColor: '#fff',
    
  },
  containertwo: {
    transform: [{ rotate: '180deg' }],
    flex:1,
    // paddingVertical: 300,
    // paddingHorizontal:20,
    backgroundColor: '#fff',
    
  },
  Heading:{
      bottom:90,
      marginVertical:60,
      padding:20,
      fontSize:60,
      fontWeight:'bold',
      fontFamily:''

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
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#8688ff',
    borderWidth:2,
    paddingVertical: 0, // Equivalent to $4 in Tamagui
    paddingHorizontal: 20, // Equivalent to $6 in Tamagui
    borderRadius: 12, // Equivalent to $5 in Tamagui
    marginVertical: 16, // Equivalent to $4 in Tamagui
    marginHorizontal:5,
    width: 150,
    left:120,
    // alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: '#000', // Replace with your theme's shadow color
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    bottom:100
  },
  buttonText: {
    color: '#8688ff', // Use your theme's text color or $background from Tamagui
    fontWeight: 'bold',
    fontSize: 20, // Equivalent to $6 in Tamagui
  },
  input: {
    paddingHorizontal: 12, // Equivalent to $3 in Tamagui
    paddingVertical: 8,   // Equivalent to $3 in Tamagui
    backgroundColor: '#ffffff',
    borderColor: '#8688ff',
    borderRadius: 8, // Equivalent to $4 in Tamagui
    borderBottomWidth: 2, // Consistent border width
    width: '90%',
    left:15,
    marginVertical:5,
    bottom:120
  },
  pristineContainer: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Centers items vertically
    marginTop:-20
  },
  gif: {
    bottom:150,
    tintColor:'#8688ff',
    width: 60, // Adjust the size of the GIF
    height: 60,
  },

  registerButtonText: {
    color: '#8688ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer:{
    right:90,
    flexDirection:'row'
  }
})