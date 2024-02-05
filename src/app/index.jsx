import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'expo-router'
import Button from '../components/Button';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../images/lampada_logo.jpg')} style={styles.imagemLogo}/>
            <Text>MAIN</Text>
        </View>

        <Text>OLA MUNDO</Text>

        <Button texto='Escala de teste' link='escala_de_braden'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#1A998E',
    padding: 20,
  },
  imagemLogo: {
    width: 80,
    height: 80,
  },
});