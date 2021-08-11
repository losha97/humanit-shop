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