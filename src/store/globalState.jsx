
import storeContext from "./storeContext";
import { useState } from 'react';

const GlobalState = (props) => {
    const [myCart, setMyCart] = useState([]);
    const [theUser, setTheUser] = useState({});

    const myAddToCart = (product) => {
        let copy = [...myCart];
        copy.push(product);
        setMyCart(copy);
    };

    const myRemoveFromCart = (productId) => {
        console.log("Removing prod:", productId);
    };

    return (
        <storeContext.Provider 
            value={{
                cart: myCart,
                user: theUser,
                addProductToCart: myAddToCart,
                removeProductFromCart: myRemoveFromCart
            }}
        >
            {props.children}
        </storeContext.Provider>
    );

};

export default GlobalState;