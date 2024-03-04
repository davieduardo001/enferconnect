import { StyleSheet, View, Image, Text } from 'react-native'
import { BotaoAzul, BotaoBranco } from '../components/BotoesMain'

export default function App() {
  return (
    <View style={styles.pagina_inicial}>

      {/*****************************************/}
      {/* CABECALHO */}
      <View style={styles.header}>
        <Image source={require('../images/logo.jpg')} />
        <Image source={require('../images/logo_txt.png')} style={{ marginLeft: 20 }} />
      </View>
      {/* CABECALHO */}   
      {/*****************************************/}

      {/*****************************************/}
      {/* CONTEUDO MAIN */}
      <View style={styles.conteudoPrincipal}>

          {/*****************************************/}
          {/* imagem e texto central */}
          <View style={{ flex: 12, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            {/* Imagem central */}
            <Image source={require('../images/enfermeira1.png')} style={{width: '100%', height: '100%', paddingTop:750,}} />
          </View>
          {/* imagem e texto central */}
          {/*****************************************/}

          {/*****************************************/}
          {/* container dos botoes */}
          <View style={styles.descricao}>
          <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, textAlign: 'justify', paddingHorizontal: 30, paddingBottom: 0, color: '#003137', }} >Entenda o risco de seus pacientes com precisão através da Escala de Braden️ ou de Morse. </Text>
            </View>
          </View>
          <View style={styles.botoesContainer}>

            {/*****************************************
                Area para os botoes de direcionamento
                ira redirecionar o usuario para as telas
                seguintes:
                  * escala_de_braden/
                  * escala_de_morse/ 
            *****************************************/}
            
            <BotaoAzul texto='Escala de braden' link='escala_de_braden' />
            <BotaoBranco texto='Escala de morse' link='escala_de_morse' />
          </View>
          {/* container dos botoes */}
          {/*****************************************/}

      </View>
      {/* CONTEUDO MAIN */}
      {/*****************************************/}
      
    </View>
  );
}

const styles = StyleSheet.create({
  pagina_inicial: {
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
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },

  descricao:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'#fff',
    height: 100,
    },

  botoesContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    paddingBottom: 20,
  },

  conteudoPrincipal: {
    flex: 12, 
    width: '100%',
  }
});