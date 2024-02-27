import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Conexion from './src/view/Conexion';
import NewMovie from './src/view/NewMovie';

export default function App() {
  return (
    <View style={styles.container}>
      <Conexion />
      <Text>---------------------------</Text>
      <NewMovie />
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
});
