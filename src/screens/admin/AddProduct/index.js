import React from 'react';
import {Appbar} from 'react-native-paper';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const ProductsList = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleSave = () => {
    Alert.alert('produto salvo!');
    setName('');
    setValue('');
    setQuantity('');
  };

  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: '#001529',
        }}>
        <Appbar.Content title="Gerenciamento" />
        <Appbar.Action
          icon="clipboard-list"
          onPress={() => navigation.navigate('ProductsList')}
        />
      </Appbar.Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar/Editar Produto</Text>
          <TextInput
            style={styles.input}
            label="Nome do produto"
            mode="outlined"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            label="Valor"
            mode="outlined"
            value={value}
            onChangeText={text => setValue(text)}
          />
          <TextInput
            style={styles.input}
            label="Quantidade"
            mode="outlined"
            value={quantity}
            onChangeText={text => setQuantity(text)}
          />
          <Button
            style={styles.button}
            icon="content-save"
            mode="contained"
            onPress={handleSave}>
            Salvar
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 12},
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginBottom: 12,
  },
});

export default ProductsList;
