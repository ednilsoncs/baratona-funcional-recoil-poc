import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import {View} from 'react-native';

const AddProduct = () => {
  const _handleAddProduct = () => console.log('Searching');

  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: '#001529',
        }}>
        <Appbar.Content title="Gerenciamento" />
        <Appbar.Action icon="plus" onPress={_handleAddProduct} />
      </Appbar.Header>
    </View>
  );
};

export default AddProduct;
