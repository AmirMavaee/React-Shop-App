import React,{useEffect,useState} from 'react';
//react-router-dom
import { Link, useParams } from "react-router-dom"
//styles
import styles from "./Details.module.css"
//axios
import axios from "axios";
//function
import { shorten } from '../../helpers/functions';




function Details() {

    const params = useParams();
    const id = params.id;
    const BASE_URL = "https://fakestoreapi.com/products";
    const [product , setProduct] = useState({})

    useEffect(()=>{
        axios.get(`${BASE_URL}/${id}`)
            .then(res => setProduct({
                ...res.data,
                title: shorten(res.data.title)
            }))
    },[])

    return (
        <div className={styles.container}>
            <img className={styles.image} alt='product' src={product.image}/>
            <div className={styles.textContainer}>
                <h3>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}><span>Categori :</span> {product.category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{product.price} $</span>
                    <Link to="/product" >Back to Shop</Link>
                </div>
            </div>
            
        </div>
    );
}

export default Details;