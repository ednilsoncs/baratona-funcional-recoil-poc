import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Avatar, Card, Text, IconButton} from 'react-native-paper';
import {useRecoilState} from 'recoil';

import {productsState} from '../recoil/atoms';

const LeftContent = () => (
  <Avatar.Image
    size={50}
    source={require('../assets/images/tenis-adidas.jpg')}
  />
);

const MiddleContent = ({product}) => {
  return (
    <View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price},00</Text>
    </View>
  );
};

const RightContent = (
  role,
  mode,
  quantity,
  handleEditProduct,
  handleDeleteProductFromStock,
  handleAddProductToCart,
  handleRemoveProductFromCart,
  handleIncreseProduct,
  handleDecreaseProduct,
) => (
  <View>
    {role === 'admin' ? (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>Qtd: {quantity}</Text>

        <IconButton icon="pencil" color="black" onPress={handleEditProduct} />
        <IconButton
          icon="delete"
          color="black"
          onPress={handleDeleteProductFromStock}
        />
      </View>
    ) : mode === 'cart' ? (
      <View style={{flexDirection: 'row'}}>
        <View style={{alignItems: 'center'}}>
          <IconButton
            icon="plus"
            color="#fff"
            size={18}
            style={styles.plusAndMinusButton}
            onPress={handleIncreseProduct}
          />
          <Text style={styles.cartQuantity}>{quantity}</Text>
          <IconButton
            icon="minus"
            color="#fff"
            size={18}
            style={styles.plusAndMinusButton}
            onPress={handleDecreaseProduct}
          />
        </View>

        <IconButton
          icon="delete"
          color="black"
          onPress={handleRemoveProductFromCart}
        />
      </View>
    ) : (
      <IconButton icon="cart" color="black" onPress={handleAddProductToCart} />
    )}
  </View>
);

const ProductCard = ({products, product, role, mode = 'normal'}) => {
  console.log();
  const [_, setProducts] = useRecoilState(productsState);
  const handleEditProduct = () => {
    console.log('EDITANDO...');
  };

  const handleDeleteProductFromStock = () => {
    const filteredProducts = products.filter(stockProduct => {
      return stockProduct.id !== product.id;
    });

    setProducts(filteredProducts);

    Alert.alert('Produto Deletado com sucesso!');
  };

  const handleAddProductToCart = () => {
    Alert.alert('Produto Adicionado ao Carrinho!');
  };

  const handleRemoveProductFromCart = () => {
    Alert.alert('Produto Removido do Carrinho!');
  };

  const handleIncreseProduct = () => {
    console.log('+1 adicionado');
  };

  const handleDecreaseProduct = () => {
    console.log('-1 removido');
  };

  return (
    <Card elevation={3} mode="elevated" style={styles.card}>
      <Card.Title
        title={<MiddleContent product={product} role={role} mode={mode} />}
        left={LeftContent}
        right={() =>
          RightContent(
            role,
            mode,
            product.quantity,
            handleEditProduct,
            handleDeleteProductFromStock,
            handleAddProductToCart,
            handleRemoveProductFromCart,
            handleIncreseProduct,
            handleDecreaseProduct,
          )
        }
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#28A745',
  },
  cartQuantity: {
    color: '#1890FF',
    fontWeight: '700',
  },
  plusAndMinusButton: {
    backgroundColor: '#1890FF',
  },
});

export default ProductCard;
