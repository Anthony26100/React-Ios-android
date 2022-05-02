import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import dummy from './assets/dummy-image-square.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ {color:'red', fontSize:20} }>Ici mon texte de mon app</Text>
      <TouchableOpacity
      onPress={()=> {alert("Votre photo")}} >
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
    backgroundColor: "red",
    color:"white",
    padding:"5px",
    borderRadius:"5px"
  },
});
