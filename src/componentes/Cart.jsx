import { useContext} from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);
    console.log (test.cartList)

    return (
        <h1>Soy La Cart</h1>
    );
}

export default Cart;