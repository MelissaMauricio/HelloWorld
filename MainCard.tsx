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
    backgroundColor: '#ff4fa3',
    padding: 24,
    borderRadius: 16,
    marginVertical: 24,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
});

export default MainCard;