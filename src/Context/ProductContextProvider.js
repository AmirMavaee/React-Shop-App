import React,{useState,useEffect,createContext} from 'react';
import { GetProduct } from '../Services/api';


export const ProductsContext = createContext();

function ProductContextProvider({children}) {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
            setProducts(await GetProduct());
        }
        fetchApi();
    },[])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductContextProvider;