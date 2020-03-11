export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const reduceCartItem = (cartItems, cartItemToReduce) => {
  let item = cartItems.find(cartItem => cartItem.id === cartItemToReduce.id);
  if (item.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
