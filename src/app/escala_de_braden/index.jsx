import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import BotaoBranco from '../../components/BotaoBranco'

export default function App() {
  return (
    <View style={styles.container}>
        <Text>tela escala de braden</Text>

        {/* <BotaoBranco texto='sim' link='escala_de_braden/resultados'/> */}
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
