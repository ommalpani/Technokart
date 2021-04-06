const products = (products = [] , action)=>{

    switch(action.type)
    {
        case 'GET_PRODUCTS':
            return action.payload;
        default : 
            return products;
    }
}

export default products;