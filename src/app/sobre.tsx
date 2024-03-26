import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Página sobre algo</Text>

      <Image style={styles.imagens}
          source={require('../../assets/winx.jpg')}
      />
      
      <Link style={styles.btn} href={"/"}>Inicio</Link>

      <Link style={styles.btn} href={"/contatos"}>Contatos</Link>
      <StatusBar style="auto" />
    </View>
  );
}


