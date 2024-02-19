import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Cancelar } from './BotoesMain'

/*
    cabecalho utilizado entre as telas de formulario
*/
export default function Cabecalho({ text, nextPage }) {

    const [returnText, setReturnText] = useState('>')

    return (
        <View style={styles.header}>
            <Cancelar link=''/>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A998E', marginHorizontal: 40 }}>{text}</Text>

            <Link href={nextPage}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A998E', marginHorizontal: 40 }} > {returnText} </Text>
            </Link>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',
    },

    content: {
        flex: 12
    }
});