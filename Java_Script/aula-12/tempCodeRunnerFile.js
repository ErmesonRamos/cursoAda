const shoppingCarts = [
  { product: "Feijão", price: 7.98, quantities: 3 },
  { product: "Arroz", price: 4.98, quantities: 5 },
  { product: "Leite 1L", price: 6.99 , quantities: 2 },
];

const cartWithTotal = shoppingCarts.map((cartItem) => {
  return {
    ...cartItem,
    total: cartItem.price * cartItem.quantities,
  };
});

console.log(cartWithTotal);