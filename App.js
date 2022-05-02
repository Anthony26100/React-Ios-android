import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import dummy from './assets/dummy-image-square.jpg';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const openImagePicker = async () =>{
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
      console.log(permission);
      if(permission.granted == false) {
        alert('Permission to access your library is required !')
        return;
      }
    const pickerResult = await ImagePicker.launchImageLibraryAsync(); //Recuperer le liens de l'image
    console.log(pickerResult);
  }

  return (
    <View style={styles.container}>
      <Image source={ dummy } style={ {width:300, height:300} }/>
      <Image source={ {uri: 'https://cdn.pixabay.com/photo/2022/01/22/16/54/book-6957870_960_720.jpg'} } style={ {width:300, height:300} }/>
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
  },
});
