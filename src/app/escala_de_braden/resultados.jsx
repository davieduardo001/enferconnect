import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button'

export default function App() {
  return (
    <View style={styles.container}>
        <Text>RESULTADOS</Text>

        <Button texto='sim' link=''/>
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
