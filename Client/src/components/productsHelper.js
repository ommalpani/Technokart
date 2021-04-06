export const filterFunction = (allProducts, search) => {

    if(search == '')
        return allProducts;

        
    if (search === 'hightolow') {
        return allProducts.sort((a,b) => {
            if(a.price < b.price)
                return 1;
            return -1;
        });
    }
    else if (search === 'lowtohigh') {
        return allProducts.sort((a,b) => {
            if(a.price > b.price)
                return 1;
            return -1;
        });
    }
    else {
        let filteredProducts = allProducts.filter(product => {
            if (product.name.toLowerCase().indexOf(search) > -1
                || product.category.toLowerCase().indexOf(search) > -1
                || product.specs.manufacturer.toLowerCase().indexOf(search) > -1)
                return true;
            return false;
        })
        return filteredProducts;
    }
}