import React from 'react';
//function
import {shorten } from '../../helpers/functions';
//styles
import styles from "./CartProduct.module.css"
//icon
import trash from "../../assets/icons/trash.svg"


function CartProduct({dispatch,data}) {

    const {image,title,price,quantity} = data
    
    
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="Product" style={{width:"200px"}}></img> 
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={()=>{
                        dispatch({type:"DCRREASE" , payload: data});
                    }}>-</button> :
                    <button onClick={()=>{
                        dispatch({type:"REMOVE_ITEM" , payload: data});
                    }}><img src={trash} alt='trash'/></button>
                }
                <button onClick={()=> {
                    dispatch({type:"INCREASE" , payload: data}); 
                }}>+</button>
            </div>
        </div>
    );
}

export default CartProduct;