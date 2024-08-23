import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      

      <Text style={styles.title}>Pristine</Text>
      <Text style={styles.buttonText}>where purity meets precision</Text>
      <Image
        source={require('../images/Pristine-removebg-preview.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />
     

    </View>
    
  );
};


const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
      height:110,
      paddingTop:30,
      paddingHorizontal: 20,
      backgroundColor: '#fff', // Change to your preferred color
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    
    title: {
      // left:-80,
      top:-20,
      fontSize: 60,
      fontWeight: 'bold',
      color: '#04053fc4',
    },
    buttonText: {
      top:15,
      right:160,
      fontSize: 16,
      color: '#04053fc4',
      // fontWeight:'bold'
    },
    logo: {
      top:-15,
      marginHorizontal:-50,
      right:110,
      width: 120, // Adjust the size based on your logo
      height: 152, // Adjust the size based on your logo
      tintColor:'#04053fc4'
    },
  
  });
  export default HeaderComponent;