import { StyleSheet, Text, View } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

const MainCard = ({ loading }: MainCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 24,
    borderRadius: 12,
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default MainCard;