import React from 'react';
import {Appbar, Text} from 'react-native-paper';
import {View, ScrollView, StyleSheet} from 'react-native';

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

const CartScreen = ({navigation}) => {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: '#001529',
        }}>
        <Appbar.Content title="Carrinho" />
        <Appbar.Action
          icon="format-list-bulleted"
          onPress={() => navigation.navigate('ClientProductsList')}
        />
      </Appbar.Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.title}>Carrinho</Text>
          {productsMock.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              role={'user'}
              mode={'cart'}
            />
          ))}
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Total: </Text>
            <Text style={styles.total}>
              R${' '}
              {productsMock.reduce((acc, cur) => {
                return acc + cur.price * cur.quantity;
              }, 0)}
            </Text>
          </View>
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
  total: {
    fontSize: 24,
    color: '#28A745',
    fontWeight: '700',
  },
});

export default CartScreen;
