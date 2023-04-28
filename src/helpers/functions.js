export const shorten = title =>{
    const splitedTitle  = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle
}

export const IsInCart = (state,id)=>{
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

export const IsMoreOne = (state, id) =>{
    const result = state.selectedItems.findIndex(item => item.id === id);
    if(result === -1){
        return false;
    }
    else{
        return state.selectedItems[result].quantity;
    }
}
