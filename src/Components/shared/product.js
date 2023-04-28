import React,{useContext} from 'react';
//function
import { shorten,IsInCart,IsMoreOne } from '../../helpers/functions';
//react-router-dom
import {Link} from "react-router-dom"
//context
import { CartContext } from '../../Context/cartContextProvider';
//styles
import styles from "./Product.module.css"
//icon
import trash from "../../assets/icons/trash.svg"

function Product({productData}) {

    const {state,dispatch} = useContext(CartContext);
    
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product'/>
            <h3>{shorten(productData.title)}</h3>
            <div className={styles.linkContainer}>
                <Link to = {`/product/${productData.id}`} >Details</Link>
                <div className={styles.buttonContainer}>
                    {
                        IsMoreOne(state, productData.id) === 1 &&
                        <button className={styles.smallButton} onClick={()=>{
                            dispatch({type:"REMOVE_ITEM" , payload: productData});
                        }}><img src={trash} alt='trash'/></button>
                    }
                    {
                        IsMoreOne(state, productData.id) > 1 &&
                        <button className={styles.smallButton}  onClick={()=>{
                            dispatch({type:"DCRREASE" , payload: productData});
                        }}>-</button>
                    }
                    {IsMoreOne(state, productData.id) > 0 && <span className={styles.counter}>{IsMoreOne(state, productData.id)}</span>}
                    {
                        IsInCart(state , productData.id) ? 
                        <button className={styles.smallButton}  onClick={()=> {
                            dispatch({type:"INCREASE" , payload: productData}); 
                        }}>+</button> :
                        <button onClick={()=> {
                            dispatch({type:"ADD_ITEM" , payload: productData});
                        }}>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;