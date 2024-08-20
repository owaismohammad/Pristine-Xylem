// LoadingScreen.tsx
import React , {useRef, useEffect}from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
const LoadingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current; 

  useEffect(() => {
    // Fade in the screen
    Animated.timing(fadeAnim, {
      toValue: 1, // End opacity is 1 (fully opaque)
      duration: 2000, // Duration for fade-in animation
      useNativeDriver: true,
    }).start(() => {
      // After fade-in, start fade-out after a delay
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0, // End opacity is 0 (completely transparent)
          duration: 2000, // Duration for fade-out animation
          useNativeDriver: true,
        }).start(() => {
          // Handle what happens after fade-out if needed
          // For example, navigate to the main content
        });
      }, 3000); // Delay before starting fade-out
    });
  }, [fadeAnim]);

  return (
    <Animated.View style={styles.container}>
      
          
          <LinearGradient
            colors={['#ffffff', '#8688ff']} // Colors from top-left to bottom-right
            style={styles.containertwo}
          />
      
       
       <View style={styles.pristineContainer}>
{/* 
       <Text style={styles.HeadingPris}>Pristine</Text> */}
       <Image
          source={require('/home/mohammad-owais/Android/AppMern/src/images/Pristine-removebg-preview.png')} // Adjust path if needed
          style={styles.gif}
       />
     </View>
     </Animated.View>
     
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  video: {
    backgroundColor:"#fff",
    width: '100%',
    height: 300, // Adjust the height based on your needs
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
    bottom:480,
    padding:20,
    fontSize:60,
    fontWeight:'bold',
    fontFamily:'',
    left:60,
    textShadowColor: '#ffff', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5, // Shadow blur
},
gif: {
  bottom:330,
  tintColor:'#04053fc4',
  width: 200, // Adjust the size of the GIF
  height: 200,
  left:90
},
pristineContainer: {
  flexDirection: 'row', // Aligns items in a row
  alignItems: 'center', // Centers items vertically
  marginTop:-200
  
},
});

export default LoadingScreen;
