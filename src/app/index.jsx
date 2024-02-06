import { StyleSheet, Text, View, Image } from 'react-native';
import {BotaoAzul, BotaoBranco} from '../components/BotoesMain';

export default function App() {
  return (
    <View style={styles.container}>

      {/* HEADER */}


      <View style={styles.header}>
        <Image source={require('../images/logo.jpg')} />
        <Image source={require('../images/logo_txt.png')} style={{ marginLeft: 20 }} />
      </View>

      {/* CONTEUDO MAIN */}

      {/* Imagem central */}
      <Image source={require('../images/enfermeira.png')} />

      {/*************************************************
            area para os botoes de 
            redirecionamentos para as
            telas de escala:
              * escala_de_braden/
              * escala_de_morse/ 
      {/***********************************************/}
      <View style={styles.botoesContainer}>
        <BotaoAzul texto='Escala de teste' link='escala_de_braden' />
        <BotaoBranco texto='Escala de morse' link='escala_de_braden'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  botoesContainer: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 400,
    paddingBottom: 20,
  }
});