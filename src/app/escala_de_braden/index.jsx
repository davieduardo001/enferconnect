import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
        <Text>tela escala de braden</Text>
        <Link>
          Toucha
        </Link>
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
});
