import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'
import Cabecalho from '../../components/Cabecalho';
import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      
      {/*****************************************/}
      {/* CABECALHO */}
      <Cabecalho text="ESCALA DE BRADEN" nextPage='escala_de_braden/return' />

      {/* CONTEUDO PRINCIAL */}
      <View style={styles.content}>

        <Text>de retorno de braden</Text>

        {/* ADICIONAR DPS OS FORMS... */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 12,
  },
});
