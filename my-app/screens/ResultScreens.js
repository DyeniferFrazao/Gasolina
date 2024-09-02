import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { media } = route.params;

  const classificarConsumo = (media) => {
    let classificacao = '';
    if (media > 12) classificacao = 'A) Mais de 12 Km/L';
    else if (media > 10) classificacao = 'B) Até 12 Km/L';
    else if (media > 8) classificacao = 'C) Até 10 Km/L';
    else if (media > 4) classificacao = 'D) Até 8 Km/L';
    else classificacao = 'E) Até 4 Km/L';
    return classificacao;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Média de Consumo: {media} Km/L</Text>
      <Text style={styles.resultText}>Classificação: {classificarConsumo(media)}</Text>
      
      <Button title="Calcular Novamente" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});