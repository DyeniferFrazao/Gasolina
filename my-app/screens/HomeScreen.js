import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const calcularMedia = () => {
    const mediaConsumo = parseFloat(km) / parseFloat(litros);
    navigation.navigate('Result', { media: mediaConsumo.toFixed(2) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Consumo de Combustível</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Quilometragem (KM)"
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Litros de Gasolina Consumidos"
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />
      
      <Button title="Calcular Média" onPress={calcularMedia} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
