import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, Modal } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';

type ImagePickerComponentProps = {
  onPrediction: (prediction: number) => void;
};
const ImagePickerComponent: React.FC<ImagePickerComponentProps> = ({ onPrediction }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [prediction, setPrediction]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
        Alert.alert('Error', response.errorMessage);
      } else {
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        } else {
          Alert.alert('Error', 'No image assets were returned');
        }
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
        Alert.alert('Error', response.errorMessage);
      } else {
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        } else {
          Alert.alert('Error', 'No image assets were returned');
        }
      }
    });
  };

  const handleDeleteImage = () => {
    setImageUri(null); // Clear the image URI
  };

  const handleUploadImage = async () => {
    if (!imageUri) {
 
      Toast.show({
        type: 'error',
        text1: 'An error occurred while uploading the image',
     
      });
      return;
    }

    // Dynamically determine the MIME type based on the file extension
  const getImageType = (uri) => {
    const fileExtension = uri.split('.').pop().toLowerCase(); // Extract the file extension
    switch (fileExtension) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      case 'bmp':
        return 'image/bmp';
      case 'webp':
        return 'image/webp';
      default:
        return 'application/octet-stream'; // Default MIME type for unknown formats
    }
  };

  const imageType=getImageType(imageUri)
    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: imageType, // or 'image/png' depending on your image type
      name: `upload.${imageUri.split('.').pop()}`, // provide a suitable name for the image
    });

    // const testData={
    //   "name":"Mohammad Owais",
    //   "age":20
    // }
    // try{
    //   const response =await axios.post("http://192.168.63.231:8080/test",testData )
    //   console.log(response)
    // }
    // catch(error){
    //   console.log(error)
    // }
    
    
    try {
      const response = await axios.post("http://192.168.63.231:8080/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        // Handle the response, e.g., show purity result or navigate to another screen
        Toast.show({
          type: 'success',
          text1: 'Image Uploaded',
       
        });
        const predictionValue = response.data.prediction;
        onPrediction(predictionValue); 
        console.log(response.data["prediction"])
      } else {
        console.log(response.data)
        Toast.show({
          type: 'error',
          text1: 'Issue Uploading the image',
       
        });
      }
    } catch (error) {
      console.error('Upload Error:', error);
  
      Toast.show({
        type: 'error',
        text1: 'An error occurred while uploading the image',
     
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select or Upload a Photo</Text>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteImage}>
            <Image
                source={require('/home/mohammad-owais/Android/AppMern/src/images/bin.png')} // Replace with your delete icon path
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.placeholder}>No Image Selected</Text>
        )}
      </View>
      <View style={styles.inside}>
      <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
      <Image
                source={require('/home/mohammad-owais/Android/AppMern/src/images/photo-and-camera.png')} // Replace with your delete icon path
                style={styles.deleteIcon}
              />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
      <Image
        source={require('/home/mohammad-owais/Android/AppMern/src/images/camera.png')} // Replace with your delete icon path
        style={styles.deleteIcon}
              />
      </TouchableOpacity>
      
      </View>
      <TouchableOpacity style={styles.buttonNew} onPress={handleUploadImage}>
      <Text style={styles.buttonNewText}>Check Purity</Text>
     
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:-200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    top:200,
    fontSize: 20,
    color:'#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    top:200,
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius:8,
    borderColor: '#ddd',
  },
  image: {
    marginTop:70,
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius:8,
  },
  placeholder: {
    fontSize: 16,
    color: '#aaa',
  },
  button: {
    top:200,
    // backgroundColor: '#6200ea',
    paddingHorizontal: 20,

   
  },
  
  deleteButton: {
    top:-225,
    left:100,
    marginTop: 10,
    
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteIcon: {
    width: 40,
    height: 40,
    // tintColor: '#ff0000',
  },
  inside:{
    flexDirection:'row'
  },
  buttonNewText: {

    color: '#fff',
    fontSize: 16,
  },
  buttonNew: {
    top:210,
    backgroundColor:'#8688ff',
    padding: 15,
    borderRadius: 5,
  
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
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#000',
  },

});

export default ImagePickerComponent;
