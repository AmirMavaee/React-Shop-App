import axios from "axios"
const BASE_URL = "https://fakestoreapi.com"

const GetProduct = async () =>{
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data
    
}

export {GetProduct};