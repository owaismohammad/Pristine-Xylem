import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const AnimatedText = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity set to 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1, // Fade to full opacity
          duration: 2000, // Duration of the animation
          useNativeDriver: true, // Use native driver for better performance
        }
      ).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
        <Text style={styles.title}>Upload or Select Water Sample</Text>
      </Animated.View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#333',
      textAlign: 'center',
      marginVertical: 20,
      paddingHorizontal: 15,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
  });
  
  export default AnimatedText;
  