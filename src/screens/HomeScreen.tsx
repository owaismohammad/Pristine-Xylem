import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Touchable, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ImagePicker from '../components/ImagePickerComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [userData, setUserData]=useState("")
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const bounceAnimation = useRef(new Animated.Value(1)).current;
  const [isLoading, setIsLoading]=useState(false)

  const handlePrediction = (predictedValue: number) => {
    setPrediction(predictedValue);
    setIsModalVisible(true)
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const getData=async ()=>{
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
      
      setIsLoading(true);

      const response = await axios.post('https://pristine-backend-deploy.onrender.com/userdata', { token });
      setUserData(response.data.data);

    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error (e.g., show a toast or alert)
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    getData();
    
  },[])



  return (
    <View style={styles.container}>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
      <Text style={styles.headingTitle}>Welcome,</Text>
      <Text style={styles.headingName}>{userData.name}</Text>
      </View>
      <ImagePicker onPrediction={handlePrediction} />
   
         {prediction === 0 && (
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}
          >
            <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <LottieView
                  source={require('../images/bottle.json')} // Replace with your Lottie animation file
                  autoPlay
                  loop
                  style={styles.lottie}
                />
                 <Text
              style={styles.modalText}
            >
              Clean Water
            </Text>
                {/* <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity> */}
              </View>
            </View>
            </TouchableWithoutFeedback> 
          </Modal>
        )}
   

      {/* Conditionally Render Modal for Prediction = 1 */}
       {prediction === 1 && (
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}
          >
             <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <LottieView
                //  source={require('/home/mohammad-owais/Android/AppMern/src/images/Animation - 1724047948316.json')} 
                  source={require('../images/uncleanfinal.json')} // 
                  autoPlay
                  loop
                  style={styles.lottie}
                />
                  <Text
                style={[styles.modalText]}
              >
              Water is Unclean
              </Text>
                {/* <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity> */}
              </View>
            </View>
            </TouchableWithoutFeedback>
          </Modal>
    
      )}
        <View style={styles.content}>
          <Text style={styles.heading}>Our Mission</Text>
          <Text style={styles.paragraph}>
            Our mission is to develop and deploy a binary classifier model designed to
            accurately distinguish between clean and unclean water images. This model leverages
            advanced machine learning algorithms to analyze various visual features in water
            samples, enabling us to automate the assessment process and provide quick, reliable
            feedback on water quality. By separating clean water from contaminated images, we
            aim to facilitate better water management practices and contribute to ensuring safe
            drinking water for communities worldwide.
          </Text>
        </View>
        <Modal
        visible={isLoading}
        transparent
        animationType="fade"
        onRequestClose={() => setIsLoading(false)}
      >
        <View style={styles.modalContainerLoading}>
          <LottieView
            source={require('../images/cleanfinal.json')} // Replace with your loading animation path
            autoPlay
            loop
            style={styles.lottieLoading}
          />
        
        </View>
      </Modal>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set a background color if needed
  },
  scrollContainer: {
    flexGrow: 1, // Ensure the content container grows to fill the ScrollView
    padding: 20, // Adjust padding if needed
  },
  content: {
    marginTop: 230, // Adjust margin to separate sections
    alignItems: 'center', // Center the content horizontally
    backgroundColor:'#E6E6FA',
    borderRadius:10,
    marginHorizontal:-5,
    paddingBottom:20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#04053fc4', // Darker color for better contrast
    marginBottom:10,
    right:90,
    textAlign: 'left',
    paddingTop:10,
    paddingLeft:10,
  },
  paragraph: {
    fontSize: 16,
    color: '#666', // Slightly lighter color for the paragraph
    textAlign: 'justify', // Justify text for a clean look
    lineHeight: 24, // Improve readability with line height
    paddingHorizontal: 10,
  },
  headingTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#04053fc4', // Darker color for better contrast
    marginBottom:10,

    textAlign: 'left',
    paddingTop:10,
    paddingLeft:10,
  },
  headingName:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8688ff', // Darker color for better contrast
  
    marginTop:-20,
    marginLeft:30,
    textAlign: 'left',
    paddingTop:10,
    paddingLeft:10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalContent: {
    top:0,
    width: 300,
    height:340,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth:2,
    borderColor:'#04053fc4',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 26, // Reduced font size for a more balanced appearance
    fontWeight: '600', // Slightly less bold for a cleaner look
    marginBottom: 16, // Adjusted spacing for better alignment
    color: "#8688ff", // Changed color to a softer blue tone
    textAlign: 'center', // Centered the text for a better visual structure
    letterSpacing: 1, // Added letter spacing for improved readability
    textShadowColor: '#000', // Added a subtle text shadow for depth
    textShadowOffset: { width: 0, height: 1 }, // Set the shadow offset
    textShadowRadius: 2, // Blurred shadow for a softer effect
    
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  modalContainerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  lottieLoading: {
    width: 200,
    height: 200,
  },
});
