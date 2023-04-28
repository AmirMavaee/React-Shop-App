import React,{ useContext } from 'react';
//context
import { CartContext } from '../../Context/cartContextProvider';
//component
import CartProduct from './CartProduct';
//react-router-dom
import { Link } from "react-router-dom"
//styles
import styles from "./Cart.module.css"



function Cart() {

    const {state,dispatch} = useContext(CartContext);


    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <CartProduct key={item.id} dispatch={dispatch} data={item}/>)}
            </div>
            {
                state.ItemsCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items :</span> {state.ItemsCounter}</p>
                    <p><span>Total Payments :</span> {state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}>Checkout</button>
                        <button className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkOut && 
                <div className={styles.complete}>
                    <h3>Check Out Seccussfully</h3>
                    <Link to="/product">Buy More</Link>
                </div>
            }
            {
                !state.checkOut && state.ItemsCounter === 0 &&
                <div className={styles.complete}>
                    <h3>Want To Buy ?</h3>
                    <Link to="/product">Go to shop</Link>
                </div>
            }
        </div>
    );
}

export default Cart;