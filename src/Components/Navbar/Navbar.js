import React,{useContext} from 'react';
//react-router-dom
import {Link} from "react-router-dom"
//context
import { CartContext } from '../../Context/cartContextProvider';
//styles
import styles from "./Navbar.module.css"
//icons
import shopIcon from "../../assets/icons/shop.svg"

function Navbar() {

    const {state} = useContext(CartContext);

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <Link className={styles.productLink} to="/product">Product</Link>
                    <div className={styles.iconContainer}>
                        <Link to="/cart"><img alt='shop' src={shopIcon}/></Link>
                        <span>{state.ItemsCounter}</span>
                    </div>
                </div>
            </div>
           
        </>
      
    );
}

export default Navbar;