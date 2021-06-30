import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Avatar, Card, Text, IconButton} from 'react-native-paper';
import {useRecoilState} from 'recoil';

import {productsState, cartState} from '../recoil/atoms';

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

const ProductCard = ({product, role, mode = 'normal'}) => {
  const [products, setProducts] = useRecoilState(productsState);
  const [cart, setCart] = useRecoilState(cartState);
  const handleEditProduct = () => {
    console.log('EDITANDO...');
  };
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };
  const handleDeleteProductFromStock = () => {
    const filteredProducts = products.filter(stockProduct => {
      return stockProduct.id !== product.id;
    });

    setProducts(filteredProducts);

    Alert.alert('Produto Deletado com sucesso!');
  };

  const handleAddProductToCart = () => {
    let productItens = [...products];
    const findItem = cart.findIndex(item => {
      product.id === item.id;
    });
    const findIndexProduct = products.findIndex(item => {
      return product.id === item.id;
    });
    const quantidtyProduct = Number(products[findIndexProduct].stock) - 1;
    const itemProduct = {...products[findIndexProduct]};

    itemProduct.stock = quantidtyProduct;
    if (findItem > 0) {
      cart[findItem].quantity = cart[findItem].quantity + 1;
    } else {
      setCart([...cart, {quantity: 1, ...product}]);
    }

    productItens[findIndexProduct] = itemProduct;

    setProducts(productItens);
  };

  const handleRemoveProductFromCart = () => {
    let productItens = [...products];
    const findItem = cart.findIndex(item => {
      product.id === item.id;
    });
    const findIndexProduct = products.findIndex(item => {
      return product.id === item.id;
    });
    const filteredProducts = cart.filter(cartProduct => {
      return cartProduct.id !== product.id;
    });
    const itemProduct = {...products[findIndexProduct]};
    const quantidtyProduct =
      Number(products[findIndexProduct].stock) + cart[findItem].quantity;
    itemProduct.stock = quantidtyProduct;
    productItens[findIndexProduct] = itemProduct;

    setProducts(productItens);
    setCart(filteredProducts);
  };

  const handleIncreseProduct = () => {
    let cartItens = [...cart];
    let productItens = [...products];
    const findIndex = cart.findIndex(item => {
      return product.id === item.id;
    });
    const findIndexProduct = products.findIndex(item => {
      return product.id === item.id;
    });

    if (products[findIndexProduct].stock < 1) {
      return;
    }
    const quantidtyProduct = Number(products[findIndexProduct].stock) - 1;
    const itemProduct = {...products[findIndexProduct]};

    itemProduct.stock = quantidtyProduct;
    products[findIndexProduct] = itemProduct;
    const item = {...cart[findIndex]};

    item.quantity = Number(cart[findIndex].quantity) + 1;
    productItens[findIndexProduct] = itemProduct;
    cartItens[findIndex] = item;
    setProducts(productItens);
    setCart(cartItens);
  };

  const handleDecreaseProduct = () => {
    const findIndexCart = cart.findIndex(item => {
      return product.id === item.id;
    });

    const findIndexProduct = products.findIndex(item => {
      return product.id === item.id;
    });

    let productItens = [...products];

    let cartItens = [...cart];
    const quantityCart = Number(cartItens[findIndexCart].quantity) - 1;
    const quantidtyProduct = Number(productItens[findIndexProduct].stock) + 1;
    if (quantityCart === 0) {
      cartItens = removeItemAtIndex(cartItens, findIndexCart);
    } else {
      const itemCart = {...cartItens[findIndexCart]};

      itemCart.quantity = quantityCart;
      cartItens[findIndexCart] = itemCart;
    }
    const itemProduct = {...productItens[findIndexProduct]};
    itemProduct.stock = quantidtyProduct;
    productItens[findIndexProduct] = itemProduct;
    setProducts(productItens);
    setCart(cartItens);
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
            role === 'admin' ? product.stock : product.quantity,
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
