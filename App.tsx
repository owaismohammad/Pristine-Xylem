import React , {useEffect, useState  }from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet , View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import NewsScreen from './src/screens/NewsScreen';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from './tamagui.config';
import LoginScreen from './src/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/RegisterScreen';
import { AuthStackParamList, MainTabParamList } from './type';
import Toast, { BaseToast } from 'react-native-toast-message';
import LoadingScreen from './src/screens/LoadingScreen';
import { XCircle } from '@tamagui/lucide-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<AuthStackParamList>();


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading]=useState(true)
  const [userData, setUserData]=useState("")
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{
          backgroundColor: '#4CAF50',
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 15,
          elevation: 6,
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#FFFFFF',
        }}
      />
    ),
    failure: props => (
      <BaseToast
        {...props}
        style={{
          height: 40,
          width: 300,
          backgroundColor: '#fff',
          // borderTopRightRadius: 20,
          // borderBottomRightRadius: 20,
          paddingHorizontal: 10,
          borderLeftColor: '#FF5252',
          // paddingVertical: 15,
          elevation: 6,
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
        }}
        renderLeadingIcon={() => (
          <View style={{ marginTop: 8, marginRight: -15 }}>
            <XCircle size={24} color='#FF6347' />
          </View>
        )}
      />
    ),
  };


  const getData=async()=>{
    const data= await AsyncStorage.getItem('isLoggedIn')
    setIsLoggedIn(data)
  }

  const handleLogin = async () => {
    
  
     Toast.show({
      type: 'success',
      text1: 'Login Successful',
      // text2: `Welcome ${userData.name}`,
    });
    
    setIsLoggedIn(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    getData()
    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  const handleRegister = () => {
    // setIsLoggedIn(true);
  };
  return (
    <TamaguiProvider config={tamaguiConfig}>
    <NavigationContainer>
      {isLoggedIn?(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          
          headerShown: false, // Hide headers if not needed
          tabBarActiveTintColor: '#6200ea', // Active tab color
          tabBarInactiveTintColor: '#888', // Inactive tab color
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = require('/home/mohammad-owais/Android/AppMern/src/images/home.png'); // Path to your Home icon
            } else if (route.name === 'You') {
              iconSource = require('/home/mohammad-owais/Android/AppMern/src/images/user.png'); // Path to your Details icon
            } else if (route.name=== 'News') {
              iconSource= require('/home/mohammad-owais/Android/AppMern/src/images/newspaper.png')
            }

            return <Image source={iconSource} style={[styles.icon, { tintColor: color }]} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="You" component={DetailsScreen} />
        
      </Tab.Navigator>
        ) : (
          <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown:false}} >
            {() => <LoginScreen onLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="Register" options={{headerShown:false}}>
              {() => <RegisterScreen onRegister={handleRegister} />}
            </Stack.Screen>
        </Stack.Navigator>
        )}
    </NavigationContainer>
    <Toast position='top' config={toastConfig} visibilityTime={3000}/>
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height:60,
    backgroundColor: '#ffffff', // Tab bar background color
    borderTopColor: '#ddd', // Border color of the tab bar
    borderTopWidth: 1, // Border width of the tab bar
    elevation: 5, // Shadow on Android
    shadowColor: '#000', // Shadow color on iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset on iOS
    shadowOpacity: 0.2, // Shadow opacity on iOS
    shadowRadius: 5, // Shadow radius on iOS
  },
  tabBarLabelStyle: {
    fontSize: 14, // Font size of the tab labels
    fontWeight: 'bold', // Font weight of the tab labels
    marginBottom: 10, // Space between label and icon
  },
  icon: {
    width: 20, // Icon width
    height: 20, // Icon height
    top:3,
  },
});

export default App;
