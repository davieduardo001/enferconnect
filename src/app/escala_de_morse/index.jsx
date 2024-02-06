import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={''} asChild>
          <TouchableOpacity>
            <Text style={{ fontSize: 18 }}>Cancel</Text>
          </TouchableOpacity>
        </Link>

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A998E', marginHorizontal: 40 }}>ESCALA DE MORSE</Text>
      </View>

      <View style={styles.content}>

        <Text>tela escala de morse</Text>

        {/* ADICIONAR DPS OS FORMS... */}
      </View>
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

  header: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    flex: 12
  }
});
