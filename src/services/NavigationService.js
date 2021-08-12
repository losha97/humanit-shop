/*
* @Author: Aleksiej Kuncewicz
* @Date:   2021-08-11 09:32:47
* @Last Modified by:   Aleksiej Kuncewicz
* @Last Modified time: 2021-08-12 18:29:42
*/

function NavigationFactory() {
  return {
    productLink: () => {
      return '/product';
    },
    basketLink: () => {
      return '/basket';
    },
    deliveryLink: () => {
      return '/delivery';
    },
    orderLink: () => {
      return '/delivery';
    },
  };
}

export const NavigationService = new NavigationFactory();