import ReactGA from 'react-ga';

// eslint-disable-next-line import/prefer-default-export
export const sendButtonClickEvent = (buttonLabel: string) => {
  ReactGA.event({
    category: 'Button',
    action: 'click',
    label: buttonLabel,
  });
};

export const sendProductAdd = (productId: string, name: string, category: string, variant: string, price:number, quantity: number ) => {
  const ga = ReactGA.ga()
  ga('ec:setAction','addProduct', {               // Provide product details in an productFieldObject.
    'id': productId,                   // Product ID (string).
    'name': name, // Product name (string).
    'category': category,            // Product category (string).
    'variant': variant,               // Product variant (string).
    price,                 // Product price (number).
    quantity                     // Product quantity (number).
  });
  debugger;
}

export const sentPurchase = (orderId:string, revenue: string, shippingCost: string) => {
  const ga = ReactGA.ga()
  ga('ec:setAction', 'purchase', {          // Transaction details are provided in an actionFieldObject.
    'id': orderId,                         // (Required) Transaction id (string).
    'revenue': revenue,                     // Revenue (number).
    'shipping': shippingCost,                     // Shipping (number).
  });

};

export const labels = {
  ADD_TO_CART: 'add_to_cart',
};
