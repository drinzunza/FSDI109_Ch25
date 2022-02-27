import { useContext } from "react";
import storeContext from "../store/storeContext";
import CartItem  from "./cartItem";
import "./cart.css";

const Cart = () => {
    const {cart} = useContext(storeContext);

    return (
        <div className="cart">
            <h1>Your cart contains {cart.length} products</h1>

            <div className="products">
                {cart.map( (prod, index) => <CartItem key={index} data={prod}></CartItem> )}                
            </div>
        </div>
    );
};

export default Cart;