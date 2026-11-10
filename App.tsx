import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainCard from './MainCard';

const nombre = 'Melissa';
const apellido = 'Quezada';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello World by {nombre} {apellido}
      </Text>

      <MainCard loading={isLoading} />

      <Button
        title={isLoading ? 'Mostrar' : 'Cargar'}
        color="#ff4fa3"
        onPress={() => setIsLoading(!isLoading)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff4fa3',
    textAlign: 'center',
  },
});