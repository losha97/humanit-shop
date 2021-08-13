/*
* @Author: Aleksiej Kuncewicz
* @Date:   2021-08-12 05:54:18
* @Last Modified by:   Aleksiej Kuncewicz
* @Last Modified time: 2021-08-13 14:45:54
*/

function BasketFactory() {
  function addStorageEvent() {
    var event = document.createEvent("Event");
    event.initEvent("storage", true, true);
    window.dispatchEvent(event);
  }

  function getProducts() {
    return JSON.parse(localStorage.getItem('basket'));
  }

  function setProducts(products) {
  	localStorage.setItem('basket', JSON.stringify(products));

    addStorageEvent();
  }

  return  {
    getProducts: getProducts,
    setProducts: setProducts
  }
}

export const BasketService = new BasketFactory();