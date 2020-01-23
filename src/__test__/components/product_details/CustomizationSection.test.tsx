import React from 'react';
import { shallow } from 'enzyme';
import { CustomizationSection } from '../../../components/product_details/CustomizationSection';
// import { Stamping } from '../../../components/product_details/Stamping';

describe('CustomizationSection', () => {
  it('should show default product price', () => {
    const wrapper = createWrapper({ defaultPrice: 15 });
    expect(wrapper.find("[data-test='price']").text()).toEqual('€ 15');
  });


  it("should not show stamping section if product is not customizable", () => {
    const wrapper = createWrapper({ isCustomizable: false });
    expect(wrapper.find("Stamping").exists()).toEqual(false);
  });

  // it('should calculate price with additional extra costs', () => {
  //   const wrapper = createWrapper({ defaultPrice: 15 });

  //   expect(wrapper.find("Stamping").text()).toEqual('€ 15');
  // })
});

const createWrapper = (props: any) =>
  shallow(
    <CustomizationSection
      defaultPrice={0}
      isCustomizable={false}
      availableSizes={[]} {...props} />
  );
