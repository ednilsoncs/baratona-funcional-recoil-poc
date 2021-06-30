import React from 'react';
import {Appbar} from 'react-native-paper';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import ProductCard from '../../../components/ProductCard';

const productsMock = [
  {
    id: 1,
    name: 'Produto 1',
    price: 80,
    quantity: 5,
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 120,
    quantity: 10,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 50,
    quantity: 20,
  },
];

const ProductsList = ({navigation}) => {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: '#001529',
        }}>
        <Appbar.Content title="Gerenciamento" />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate('AddProduct')}
        />
      </Appbar.Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.title}>Lista de produtos</Text>
          {productsMock.map(product => (
            <ProductCard key={product.id} product={product} role="admin" />
          ))}
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
});

export default ProductsList;
