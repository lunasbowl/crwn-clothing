import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingSvg, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCardOpen}>
      <ShoppingSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
