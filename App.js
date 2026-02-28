import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './src/Components/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is home the app!</Text>
      <Formulario />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3E46',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
