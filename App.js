import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import dummy from './assets/dummy-image-square.jpg';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {
  const [image,setImage] = useState(null);

  const openImagePicker = async () =>{
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
      console.log(permission);
      if(permission.granted == false) {
        alert('Permission to access your library is required !')
        return;
      }

    const pickerResult = await ImagePicker.launchImageLibraryAsync(); //Recuperer le liens de l'image
      if(pickerResult.cancelled) {
        return;
      }
      setImage(pickerResult.uri);
    
  }

  if(image !==null){
    return(
      <View style={styles.container}>
        <Image source={ {uri: image} } style={ {width:300, height:300} }/>
        <Text style={ {color:'red', fontSize:20} }>Ici mon texte de mon app</Text>
        <TouchableOpacity
        onPress={openImagePicker} >
          <Text style={styles.button}>Pick a photo</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>)
  }

  return (
    <View style={styles.container}>
      <Image source={ dummy } style={ {width:300, height:300} }/>
      <Text style={ {color:'red', fontSize:20} }>Ici mon texte de mon app</Text>
      <TouchableOpacity
      onPress={openImagePicker} >
        <Text style={styles.button}>Pick a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'red',
    color:'white',
    padding: '1%',
    borderRadius: '15%',
    textAlign: 'center',
  },
});
