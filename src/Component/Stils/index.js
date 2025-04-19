/**
 * this functio ncalculates the total price of the product
 * 
 * @param {array} products 
 * @returns {number}
 */

export const totalPrice = (products) =>{
    let suma = 0
    
    products.forEach(products => suma += products.price );
    return suma

}