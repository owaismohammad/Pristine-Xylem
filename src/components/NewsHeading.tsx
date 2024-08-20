import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewsHeading = () => {
  return (
    <View style={styles.headerContainer}>
      

    <Text style={styles.title}>News</Text>
    <Text style={styles.buttonText}>From The Depths Of Atlantis</Text>
   

  </View>
  )
}

export default NewsHeading

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 15,
      
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
      color: '#8688ff',
    },
    buttonText: {
      top:15,
      right:160,
      fontSize: 16,
      color: '#8688ff',
    },
    logo: {
      top:-15,
      marginHorizontal:-50,
      right:110,
      width: 120, // Adjust the size based on your logo
      height: 152, // Adjust the size based on your logo
    },
  
  });