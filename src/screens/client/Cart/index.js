import React from 'react';
import {Appbar} from 'react-native-paper';
import {View} from 'react-native';

const ProductsList = () => {
  const _handleAddProduct = () => console.log('Searching');
  return (
    <Appbar.Header
      style={{
        backgroundColor: '#001529',
      }}>
      <Appbar.Content title="Gerenciamento" />
      <Appbar.Action icon="plus" onPress={_handleAddProduct} />
    </Appbar.Header>
  );
};

export default ProductsList;
