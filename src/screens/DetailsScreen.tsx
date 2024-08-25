import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, Modal } from 'react-native';
import { YStack, Button } from 'tamagui';
import { API_URL } from 'react-native-dotenv';
const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({ name: '', email: '', mobile: '' });
  const [isLoading, setIsLoading]=useState(false)
  const getData = async () => {

    setIsLoading(true)
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios.post(`${API_URL}/userData`, { token });
      setUserData(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('token');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }], // Adjust this if your stack name is different
        })
      );
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <YStack alignItems="center" marginBottom={30}>
        <Image
          source={require('../images/Pristine-removebg-preview.png')} // Replace with your icon path
          style={styles.profileIcon}
        />
        <Text style={styles.name}>{userData.name}</Text>
      </YStack>

      <View style={styles.card}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{userData.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{userData.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Mobile:</Text>
          <Text style={styles.info}>{userData.mobile}</Text>
        </View>
      </View>

      <Button onPress={signOut} style={styles.signOutButton}>Sign Out</Button>

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

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    borderColor: '#8688ff',
    borderWidth: 2,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    elevation: 3, // Shadow effect
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    marginVertical: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8688ff',
  },
  info: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#8688ff',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  signOutButton: {
    backgroundColor: '#FF5252',
    // paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
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

export default UserProfileScreen;
