import React from 'react';
import { shallow } from 'enzyme';
import CartContent from '../../../components/cart/CartContent';
import { getCartItems, getShippingCost } from '../../../store/selectors';


//https://github.com/facebook/jest/issues/2567

const mockSelect = jest.fn();
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: (selector) => mockSelect(selector),
  useDispatch: () => mockDispatch,
}));


describe('Cart', () => {

  it('should render', () => {
    mockSelect
      .mockReturnValueOnce([{ value: '12' }])
      .mockReturnValueOnce(35);

    const wrapper = shallow(<CartContent/>);
    wrapper.find('#btest').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({type: 'test'});
    expect(mockSelect).toHaveBeenCalledWith(getShippingCost);
    expect(mockSelect).toHaveBeenCalledWith(getCartItems);

  });
});
