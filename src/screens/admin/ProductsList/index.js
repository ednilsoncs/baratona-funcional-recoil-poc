import React from 'react';
import {Appbar} from 'react-native-paper';

const ProductsList = () => {
  const _handleAddProduct = () => console.log('Searching');
  return (
    <Appbar.Header
      style={{
        backgroundColor: '#001529',
      }}>
      <Appbar.Content title="Produtos" />
      <Appbar.Action icon="cart" onPress={_handleAddProduct} />
    </Appbar.Header>
  );
};

export default ProductsList;
