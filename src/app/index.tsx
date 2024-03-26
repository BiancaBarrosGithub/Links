import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Página Contatos</Text>

      <Image style={styles.imagens}
          source={require('../../assets/simpsons.jpg')}
      />

      <Link style={styles.btn} href={"/contatos"}>Contatos</Link>

      <Link style={styles.btn} href={"/sobre"}>Sobre</Link>

      <StatusBar style="auto" />
    </View>
  );
}


