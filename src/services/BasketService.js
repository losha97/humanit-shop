/*
* @Author: Aleksiej Kuncewicz
* @Date:   2021-08-12 05:54:18
* @Last Modified by:   Aleksiej Kuncewicz
* @Last Modified time: 2021-08-12 05:56:12
*/

function BasketFactory() {
  function getProducts() {
    return JSON.parse(localStorage.getItem('basket'));
  }

  function setProducts(products) {
  	localStorage.setItem('basket', JSON.stringify(products));
  }

  return  {
    getProducts: getProducts,
    setProducts: setProducts
  }
}

export const BasketService = new BasketFactory();