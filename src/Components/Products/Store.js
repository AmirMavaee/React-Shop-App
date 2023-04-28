import React,{useContext} from 'react';
//context
import {ProductsContext} from '../../Context/ProductContextProvider';
//component
import Product from '../shared/product';
//styles
import styles from "./Store.module.css"

function Store({changeTotal}) {
    const products = useContext(ProductsContext);
  
    return (
        <>
            <div className={styles.container}>
                {products.map(product => <Product event={changeTotal} key={product.id} productData={product}/>)}
            </div>
        </>
      
    );
}

export default Store;