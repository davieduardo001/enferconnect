import { StyleSheet, View, Image } from 'react-native'
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
          {/* imagem central */}
          <View style={{ flex: 12, width: '100%' }}>
            {/* Imagem central */}
            <Image source={require('../images/enfermeira.png')} style={{ height: '100%', width: '100%' }} />
          </View>
          {/* imagem central */}
          {/*****************************************/}

          {/*****************************************/}
          {/* container dos botoes */}
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

  botoesContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '100%',
  },

  conteudoPrincipal: {
    flex: 12, 
    width: '100%'
  }
});