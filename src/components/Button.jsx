import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Link} from 'expo-router'

export default function Button({texto, link}) {
  return (
    <Link href={link} asChild>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 200,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#1A998E',
    marginTop: 20
  },
  textoBotao: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold'
}
});
