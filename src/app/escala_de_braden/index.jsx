import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import { useState, useEffect } from 'react'
import Cabecalho from '../../components/Cabecalho'

export default function App() {

  /////////////////////////////////////////////////
  // PERCEPCAO SENSORIAL LOGICA
  const [valorPercepcaoSensorial, setValorPercepcaoSensorial] = useState(1)
  const [textoPercepcaoSensorial, setTextoPercepcaoSensorial] = useState('Totalmente Limitado')

  // setando botao 1
  const [button1PercepcaoSensorial, setButton1PercepcaoSensorial] = useState({
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
  const [button1TextPercepcaoSensorial, setButton1TextPercepcaoSensorial] = useState({
    color: '#F28585', // este ira mudar constantemente!!
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 2
  const [button2PercepcaoSensorial, setButton2PercepcaoSensorial] = useState({
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
  const [button2TextPercepcaoSensorial, setButton2TextPercepcaoSensorial] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 3
  const [button3PercepcaoSensorial, setButton3PercepcaoSensorial] = useState({
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
  const [button3TextPercepcaoSensorial, setButton3TextPercepcaoSensorial] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 4
  const [button4PercepcaoSensorial, setButton4PercepcaoSensorial] = useState({
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
  const [button4TextPercepcaoSensorial, setButton4TextPercepcaoSensorial] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // lidar com a troca dos botoes
  const changeButtonPercepcaoSensorial = (buttonId) => {
    switch (buttonId) {

      // quando mudar para o botao 1
      case 1:
        setValorPercepcaoSensorial(1)
        setTextoPercepcaoSensorial('Completamente limitado')

        // setando o botao atual
        setButton1PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton1TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#F28585'
        }))

        // setando os botoes ao original
        setButton2PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 2
      case 2:
        setValorPercepcaoSensorial(2)
        setTextoPercepcaoSensorial('Muito Limitado')

        // setando o botao atual
        setButton2PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton2TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#FFA447'
        }))

        // setando os botoes ao original
        setButton1PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 3
      case 3:
        setValorPercepcaoSensorial(3)
        setTextoPercepcaoSensorial('Ligeiramente limitado')

        // setando o botao atual
        setButton3PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton3TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#9ADE7B'
        }))

        // setando os botoes ao original
        setButton1PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 4
      case 4:
        setValorPercepcaoSensorial(4)
        setTextoPercepcaoSensorial('Sem limitacao')

        // setando o botao atual
        setButton4PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton4TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#186F65'
        }))

        // setando os botoes ao original
        setButton1PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextPercepcaoSensorial(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3PercepcaoSensorial(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextPercepcaoSensorial(prevState => ({
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

  const [valorUmidade, setValorUmidade] = useState(1)
  const [textoUmidade, setTextoUmidade] = useState('Sempre umida')

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
        setValorUmidade(1)
        setTextoUmidade('Sempre umido')

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
        setValorUmidade(2)
        setTextoUmidade('Muito Umido')


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
        setValorUmidade(3)
        setTextoUmidade('Ocasionamente umido')

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
        setValorUmidade(4)
        setTextoUmidade('Raramente umido')

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
  // ATIVIDADE LOGICA
  const [atividadeValor, setAtividadeValor] = useState(1)
  const [atividadeTexto, setAtividadeTexto] = useState('Acamado')

  // setando botao 1
  const [button1Atividade, setButtonAtividade1] = useState({
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
  const [button1TextAtividade, setButtonAtividade1Text] = useState({
    color: '#F28585', // este ira mudar constantemente!!
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 2
  const [button2Atividade, setButtonAtividade2] = useState({
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
  const [button2TextAtividade, setButtonAtividade2Text] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 3
  const [button3Atividade, setButtonAtividade3] = useState({
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
  const [button3TextAtividade, setButtonAtividade3Text] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 4
  const [button4Atividade, setButtonAtividade4] = useState({
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
  const [button4TextAtividade, setButtonAtividade4Text] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // lidar com a troca dos botoes
  const changeButtonAtividade = (buttonId) => {
    switch (buttonId) {

      // quando mudar para o botao 1
      case 1:
        setAtividadeValor(1)
        setAtividadeTexto('Acamado')

        // setando o botao atual
        setButtonAtividade1(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButtonAtividade1Text(prevState => ({
          ...prevState,
          color: '#F28585'
        }))

        // setando os botoes ao original
        setButtonAtividade2(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButtonAtividade2Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade3(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButtonAtividade3Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade4(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButtonAtividade4Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 2
      case 2:
        setAtividadeValor(2)
        setAtividadeTexto('Confinado a cadeira')

        // setando o botao atual
        setButtonAtividade2(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButtonAtividade2Text(prevState => ({
          ...prevState,
          color: '#FFA447'
        }))

        // setando os botoes ao original
        setButtonAtividade1(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButtonAtividade1Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade3(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButtonAtividade3Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade4(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButtonAtividade4Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 3
      case 3:
        setAtividadeValor(3)
        setAtividadeTexto('Anda ocasionalmente')

        // setando o botao atual
        setButtonAtividade3(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButtonAtividade3Text(prevState => ({
          ...prevState,
          color: '#9ADE7B'
        }))

        // setando os botoes ao original
        setButtonAtividade1(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButtonAtividade1Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade2(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButtonAtividade2Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade4(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButtonAtividade4Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 4
      case 4:
        setAtividadeValor(4)
        setAtividadeTexto('Anda frequentemente')

        // setando o botao atual
        setButtonAtividade4(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButtonAtividade4Text(prevState => ({
          ...prevState,
          color: '#186F65'
        }))

        // setando os botoes ao original
        setButtonAtividade1(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButtonAtividade1Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade2(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButtonAtividade2Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButtonAtividade3(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButtonAtividade3Text(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      default:
        break;
    }
  }
  /////////////////////////////////////////////////
  // ATIVIDADE LOGICA

  // MOBILIDADE LOGICA
  /////////////////////////////////////////////////
  const [valorMobilidade, setValorMobilidade] = useState(1)
  const [textoMobilidade, setTextoMobilidade] = useState('Totalmente imovel')

  // setando botao 1
  const [button1Mobilidade, setButton1Mobilidade] = useState({
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
  const [button1Text, setButton1TextMobilidade] = useState({
    color: '#F28585', // este ira mudar constantemente!!
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 2
  const [button2Mobilidade, setButton2Mobilidade] = useState({
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
  const [button2Text, setButton2TextMobilidade] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 3
  const [button3Mobilidade, setButton3Mobilidade] = useState({
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
  const [button3Text, setButton3TextMobilidade] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // setando botao 4
  const [button4Mobilidade, setButton4Mobilidade] = useState({
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
  const [button4Text, setButton4TextMobilidade] = useState({
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  })

  // lidar com a troca dos botoes
  const changeButtonMobilidade = (buttonId) => {
    switch (buttonId) {

      // quando mudar para o botao 1
      case 1:
        setValorMobilidade(1)
        setTextoMobilidade('TEXTO 1')

        // setando o botao atual
        setButton1Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton1TextMobilidade(prevState => ({
          ...prevState,
          color: '#F28585'
        }))

        // setando os botoes ao original
        setButton2Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 2
      case 2:
        setValorMobilidade(2)
        setTextoMobilidade('Muito limitado')

        // setando o botao atual
        setButton2Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton2TextMobilidade(prevState => ({
          ...prevState,
          color: '#FFA447'
        }))

        // setando os botoes ao original
        setButton1Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 3
      case 3:
        setValorMobilidade(3)
        setTextoMobilidade('Ligeiramente limitado')

        // setando o botao atual
        setButton3Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton3TextMobilidade(prevState => ({
          ...prevState,
          color: '#9ADE7B'
        }))

        // setando os botoes ao original
        setButton1Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton4Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#186F65'
        }))
        setButton4TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      // quando mudar para o botao 4
      case 4:
        setValorMobilidade(4)
        setTextoMobilidade('Sem limitacoes')

        // setando o botao atual
        setButton4Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#fff'
        }))
        setButton4TextMobilidade(prevState => ({
          ...prevState,
          color: '#186F65'
        }))

        // setando os botoes ao original
        setButton1Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#F28585'
        }))
        setButton1TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton2Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#FFA447'
        }))
        setButton2TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))

        setButton3Mobilidade(prevState => ({
          ...prevState,
          backgroundColor: '#9ADE7B'
        }))
        setButton3TextMobilidade(prevState => ({
          ...prevState,
          color: '#fff'
        }))
        break;

      default:
        break;
    }
  }
  /////////////////////////////////////////////////
  // MOBILIDADE LOGICA

  // NUTRICAO LOGICA
  /////////////////////////////////////////////////
  
  /////////////////////////////////////////////////
  // NUTRICAO LOGICA

  /////////////////////////////////////////////////
  // LOGICA TOTAL
  const [totalFinal, setTotalFinal] = useState()
  const [outputFinal, setOutputFinal] = useState('')

  const atualizarTotalFinal = (percepcaoSensorial, umidade, atividade, mobilidade) => {
    total = percepcaoSensorial + umidade + atividade + mobilidade
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
    atualizarTotalFinal(valorPercepcaoSensorial, valorUmidade, atividadeValor, valorMobilidade)
  }, [textoPercepcaoSensorial, textoUmidade, atividadeValor, valorMobilidade])
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
          <View style={styles.formInputs}>

            {/* label */}
            <Text style={styles.formLabel}>Percepcao sensorial</Text>

            {/*****************************************/}
            {/* botoes do formulario */}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1PercepcaoSensorial} onPress={() => changeButtonPercepcaoSensorial(1)}>
                <Text style={button1TextPercepcaoSensorial}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button2PercepcaoSensorial} onPress={() => changeButtonPercepcaoSensorial(2)}>
                <Text style={button2TextPercepcaoSensorial}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button3PercepcaoSensorial} onPress={() => changeButtonPercepcaoSensorial(3)}>
                <Text style={button3TextPercepcaoSensorial}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button4PercepcaoSensorial} onPress={() => changeButtonPercepcaoSensorial(4)}>
                <Text style={button4TextPercepcaoSensorial}>4</Text>
              </TouchableOpacity>
            </View>
            {/* botoes do formulario */}
            {/*****************************************/}

            {/* resultado */}
            <Text style={styles.formResultado}>{textoPercepcaoSensorial}</Text>

          </View>
          {/*****************************************/}
          {/* percepcao sensorial form */}

          {/*****************************************/}
          {/* umidade form */}
          <View style={styles.formInputs}>

            {/* label */}
            <Text style={styles.formLabel}>Umidade</Text>

            {/*****************************************/}
            {/* botoes do formulario */}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1Umidade} onPress={() => changeButtonUmidade(1)}>
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
            {/* botoes do formulario */}
            {/*****************************************/}

            {/* resultado */}
            <Text style={styles.formResultado}>{textoUmidade}</Text>

          </View>
          {/*****************************************/}
          {/* umidade form */}

          {/* atividade form */}
          {/*****************************************/}
          <View style={styles.formInputs}>

            {/* label */}
            <Text style={styles.formLabel}>Atividade</Text>

            {/*****************************************/}
            {/* botoes do formulario */}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1Atividade} onPress={() => changeButtonAtividade(1)}>
                <Text style={button1TextAtividade}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button2Atividade} onPress={() => changeButtonAtividade(2)}>
                <Text style={button2TextAtividade}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button3Atividade} onPress={() => changeButtonAtividade(3)}>
                <Text style={button3TextAtividade}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button4Atividade} onPress={() => changeButtonAtividade(4)}>
                <Text style={button4TextAtividade}>4</Text>
              </TouchableOpacity>
            </View>
            {/* botoes do formulario */}
            {/*****************************************/}

            {/* resultado */}
            <Text style={styles.formResultado}>{atividadeTexto}</Text>
          </View>
          {/*****************************************/}
          {/* atividade form */}

          {/* mobilidade form */}
          {/*****************************************/}
          <View style={styles.formInputs}>

            {/* label */}
            <Text style={styles.formLabel}>Mobilidade</Text>

            {/*****************************************/}
            {/* botoes do formulario */}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1Mobilidade} onPress={() => changeButtonMobilidade(1)}>
                {/* este textoMobilidade vai ser alterado e lido pelo useState constantemente */}
                <Text style={button1Text}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button2Mobilidade} onPress={() => changeButtonMobilidade(2)}>
                <Text style={button2Text}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button3Mobilidade} onPress={() => changeButtonMobilidade(3)}>
                <Text style={button3Text}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={button4Mobilidade} onPress={() => changeButtonMobilidade(4)}>
                <Text style={button4Text}>4</Text>
              </TouchableOpacity>
            </View>
            {/* botoes do formulario */}
            {/*****************************************/}

            {/* resultado */}
            <Text style={styles.formResultado}>{textoMobilidade}</Text>
          </View>
          {/*****************************************/}
          {/* mobilidade form */}

          {/* percepcao nutricao form */}
          {/*****************************************/}
          <View style={styles.formInputs}>

            {/* label */}
            <Text style={styles.formLabel}>LABEL EXEMPLO</Text>

            {/*****************************************/}
            {/* botoes do formulario */}
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={button1} onPress={() => changeButton(1)}>
                {/* este texto vai ser alterado e lido pelo useState constantemente */}
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
            <Text style={styles.formResultado}>{texto}</Text>
          </View>
          {/*****************************************/}
          {/* percepcao nutricao form */}

        </ScrollView>
        {/* formulario */}
        {/*****************************************/}

        {/*****************************************/}
        {/* resultado final container */}
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total: {totalFinal} - {outputFinal}</Text>
        </View>
        {/*****************************************/}
        {/* resultado final container */}

      </View>
      {/* CONTEUDO PRINCIPAL */}
      {/*****************************************/}

    </View>
  )
  // RENDENIZACACAO
  /////////////////////////////////////////////////
}

/////////////////////////////////////////////////
// ESTILIZACAO
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
    marginTop: 30,
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