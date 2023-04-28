import {useReducer, createContext} from 'react';

const initialState = {
    selectedItems : [],
    ItemsCounter : 0,
    total:0,
    checkOut:false
}

const setItem = (items)=>{
    const ItemsCounter = items.reduce((total,product)=> total + product.quantity, 0)
    const total = items.reduce((total,product) => total + product.price * product.quantity , 0).toFixed(2);
    return {ItemsCounter , total}
}


const cartReducer =(state , action) =>{
    console.log(state);
    switch(action.type){
        case "ADD_ITEM":
           if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1,
                })
           } 
           return {
            ...state,
            ...setItem(state.selectedItems),
            selectedItems:[...state.selectedItems],
            checkOut:false
        }   

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                ...setItem(newSelectedItems),
                selectedItems:[...newSelectedItems],
        }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...setItem(state.selectedItems),
        }

        case "DCRREASE":
            const indexJ = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexJ].quantity--;
            return {
                ...state,
                ...setItem(state.selectedItems),
        }

        case "CHECKOUT":{
            return {
                selectedItems : [],
                ItemsCounter : 0,
                total:0,
                checkOut:true
            }
        }

        case "CLEAR":{
            return {
                selectedItems : [],
                ItemsCounter : 0,
                total:0,
                checkOut:false
            }
        }

        default:
         return state

    }
}

export const CartContext = createContext();



function CartContextProvider({children}) {

    const [state , dispatch] = useReducer(cartReducer, initialState);

    return (
      <CartContext.Provider value={{state , dispatch}}>
        {children}
      </CartContext.Provider>
    );
}

export default CartContextProvider;
