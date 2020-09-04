import ReactGA from 'react-ga';

// eslint-disable-next-line import/prefer-default-export
export const sendButtonClickEvent = (buttonLabel: string) => {
  ReactGA.event({
    category: 'Button',
    action: 'click',
    label: buttonLabel,
  });
};


export const labels = {
  ADD_TO_CART: 'add_to_cart',
};
