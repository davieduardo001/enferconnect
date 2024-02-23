import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import { useState, useEffect } from 'react'
import Cabecalho from '../../components/Cabecalho'

export default function App() {

  /////////////////////////////////////////////////
  // PERCEPCAO SENSORIAL LOGICA
  const [individualPercepcaoSensorial, setIndividualPercepcaoSensorial] = useState(1)
  const [totalPercepcaoSensorial, setTotalPercepcaoSensorial] = useState('Totalmente Limitado')

  // setando botao 1
  const [button1, setButton1] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff', // este vai ser mudado constantemente :P
    borderColor: '#F28585',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button1Text, setButton1Text] = useState({
    color: '#F28585', // este ira mudar constantemente!!
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 2
  const [button2, setButton2] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#FFA447',
    borderColor: '#FFA447',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button2Text, setButton2Text] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 3
  const [button3, setButton3] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#9ADE7B',
    borderColor: '#9ADE7B',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button3Text, setButton3Text] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 4
  const [button4, setButton4] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#186F65',
    borderColor: '#186F65',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button4Text, setButton4Text] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // lidar com a troca dos botoes
  const changeButton = (buttonId) => {
    switch (buttonId) {

      // quando mudar para o botao 1
      case 1:
        setIndividualPercepcaoSensorial(1)
        setTotalPercepcaoSensorial('Completamente limitado')

        // setando o botao atual
        setButton1(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton1Text(prevState => ({
          ...prevState,
          color: '#F28585'
        }))

        // setando os botoes ao original
        setButton2(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 2
      case 2:
        setIndividualPercepcaoSensorial(2)
        setTotalPercepcaoSensorial('Muito Limitado')

        // setando o botao atual
        setButton2(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton2Text(prevState => ({
          ...prevState,
          color: '#FFA447'
        }))

        // setando os botoes ao original
        setButton1(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 3
      case 3:
        setIndividualPercepcaoSensorial(3)
        setTotalPercepcaoSensorial('Ligeiramente limitado')

        // setando o botao atual
        setButton3(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton3Text(prevState => ({
          ...prevState,
          color: '#9ADE7B'
        }))

        // setando os botoes ao original
        setButton1(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 4
      case 4:
        setIndividualPercepcaoSensorial(4)
        setTotalPercepcaoSensorial('Sem limitacao')

        // setando o botao atual
        setButton4(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton4Text(prevState => ({
          ...prevState,
          color: '#186F65'
        }))

        // setando os botoes ao original
        setButton1(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      default:
        break;
    }
  }
  // PERCEPCAO SENSORIAL LOGICA
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  // UMIDADE LOGICA

  const [individualUmidade, setIndividualUmidade] = useState(1)
  const [totalUmidade, setTotalUmidade] = useState('Sempre umida')
  // setando botao 1
  const [button1Umidade, setButton1Umidade] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff', // este vai ser mudado constantemente :P
    borderColor: '#F28585',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button1TextUmidade, setButton1TextUmidade] = useState({
    color: '#F28585', // este ira mudar constantemente!!
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 2
  const [button2Umidade, setButton2Umidade] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#FFA447',
    borderColor: '#FFA447',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button2TextUmidade, setButton2TextUmidade] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 3
  const [button3Umidade, setButton3Umidade] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#9ADE7B',
    borderColor: '#9ADE7B',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button3TextUmidade, setButton3TextUmidade] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 4
  const [button4Umidade, setButton4Umidade] = useState({
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#186F65',
    borderColor: '#186F65',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  })
  const [button4TextUmidade, setButton4TextUmidade] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // lidar com a troca dos botoes
  const changeButtonUmidade = (buttonId) => {
    switch (buttonId) {

      // quando mudar para o botao 1
      case 1:
        setIndividualUmidade(1)
        setTotalUmidade('Sempre umido')

        // setando o botao atual
        setButton1Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton1TextUmidade(prevState => ({
          ...prevState,
          color: '#F28585'
        }))

        // setando os botoes ao original
        setButton2Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 2
      case 2:
        setIndividualUmidade(2)
        setTotalUmidade('Muito Umido')


        // setando o botao atual
        setButton2Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton2TextUmidade(prevState => ({
          ...prevState,
          color: '#FFA447'
        }))

        // setando os botoes ao original
        setButton1Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 3
      case 3:
        setIndividualUmidade(3)
        setTotalUmidade('Ligeiramente limitado')

        // setando o botao atual
        setButton3Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton3TextUmidade(prevState => ({
          ...prevState,
          color: '#9ADE7B'
        }))

        // setando os botoes ao original
        setButton1Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 4
      case 4:
        setIndividualUmidade(4)
        setTotalUmidade('Raramente umido')

        // setando o botao atual
        setButton4Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton4TextUmidade(prevState => ({
          ...prevState,
          color: '#186F65'
        }))

        // setando os botoes ao original
        setButton1Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3Umidade(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextUmidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      default:
        break;
    }
  }
  // UMIDADE LOGICA
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  // LOGICA TOTAL
  const [totalFinal, setTotalFinal] = useState()
  const [outputFinal, setOutputFinal] = useState('')

  const atualizarTotalFinal = (percepcaoSensorial, umidade) => {
    total = percepcaoSensorial + umidade
    setTotalFinal(total)

    if (total < 12) {
      setOutputFinal('Alto risco')
    } else if (total == 13 || total == 14) {
      setOutputFinal('Risco moderado')
    } else if (total >= 15 && total <= 18) {
      setOutputFinal('Risco Baixo')
    } else if (total >= 19) {
      setOutputFinal('Sem risco')
    }
  }

  useEffect(() => {
    atualizarTotalFinal(individualPercepcaoSensorial, individualUmidade)
  }, [totalPercepcaoSensorial, totalUmidade])
  // LOGICA TOTAL
  /////////////////////////////////////////////////
  
  /////////////////////////////////////////////////
  // RENDENIZACACAO
  return (
    <View style={styles.container}>

      {/*****************************************/}
      {/* CABECALHO */}
      <Cabecalho text="ESCALA DE BRADEN" nextPage='escala_de_braden/return' />
      {/* CABECALHO */}
      {/*****************************************/}
      
      {/*****************************************/}
      {/* CONTEUDO PRINCIPAL */}
      <View style={styles.content}>

        {/*****************************************/}
        {/* formulario */}
        <ScrollView>

          {/*****************************************/}
          {/* percepcao sensorial form */}
          <View style={{ alignItems: 'center', marginBottom: 20 }}>

            {/* label */}
            <Text style={styles.formLabel}>Percepcao sensorial</Text>

            {/*****************************************/}
            {/* botoes do formulario */}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1} onPress={() => changeButton(1)}>
                {/* este texto vai ser alterado e lido pelo use state constantemente */}
                <Text style={button1Text}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button2} onPress={() => changeButton(2)}>
                <Text style={button2Text}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button3} onPress={() => changeButton(3)}>
                <Text style={button3Text}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button4} onPress={() => changeButton(4)}>
                <Text style={button4Text}>4</Text>
              </TouchableOpacity>
            </View>
            {/* botoes do formulario */}
            {/*****************************************/}

            {/* resultado */}
            <Text style={styles.formResultado}>{totalPercepcaoSensorial}</Text>

          </View>
          {/*****************************************/}
          {/* percepcao sensorial form */}

          {/*****************************************/}
          {/* umidade form */}
          <View style={styles.formInputs}>

            {/* label do formulario */}
            <Text style={styles.formLabel}>Umidade</Text>

            {/* botoes do formulario inicio
            contem os botoes referentes ao label do formulario*/}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1Umidade} onPress={() => changeButtonUmidade(1)}>
                {/* este texto vai ser alterado e lido pelo use state constantemente */}
                <Text style={button1TextUmidade}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button2Umidade} onPress={() => changeButtonUmidade(2)}>
                <Text style={button2TextUmidade}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button3Umidade} onPress={() => changeButtonUmidade(3)}>
                <Text style={button3TextUmidade}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button4Umidade} onPress={() => changeButtonUmidade(4)}>
                <Text style={button4TextUmidade}>4</Text>
              </TouchableOpacity>
            </View>
            {/* botoes do formulario, final */}

            {/* resultado do form individual */}
            <Text style={styles.formResultado}>{totalUmidade}</Text>

          </View>
          {/*****************************************/}
          {/* umidade form */}
          
        </ScrollView>
        {/* formulario */}
        {/*****************************************/}

        {/* resultado final container */}
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total: {totalFinal} - {outputFinal}</Text>
        </View>
      </View>
    </View>  
  )
  // RENDENIZACACAO
  /////////////////////////////////////////////////
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
    width: '100%',
  },

  formulario: {
    flex: 1,
    alignItems: 'center',
  },

  formInputs: { 
    alignItems: 'center', 
    marginTop: 10 
  },

  formLabel: { 
    fontSize: 15, 
    fontWeight: 'bold'
  },

  formResultado: { 
    fontSize: 14, 
    color: '#555843'
  }
})