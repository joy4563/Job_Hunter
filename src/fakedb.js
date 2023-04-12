// use local storage to manage cart data
const addToDb = (id, email) => {
    let shoppingCart = getShoppingCart();
    // add email
    const getId = shoppingCart[id];
    if (!getId) {
        shoppingCart[id] = email;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     shoppingCart[id] = newQuantity;
    // }
    localStorage.setItem('Job', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('Job', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Job');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('Job');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
