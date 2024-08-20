import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const MissionScreen = () => {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
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
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color for better readability
  },
  content: {
  
    alignItems: 'center', // Center the content horizontally
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Darker color for better contrast
    marginBottom: 20,
    textAlign:'left'
  },
  paragraph: {
    fontSize: 16,
    color: '#666', // Slightly lighter color for the paragraph
    textAlign: 'justify', // Justify text for a clean look
    lineHeight: 24, // Improve readability with line height
    paddingHorizontal: 10,
  },
});

export default MissionScreen;
