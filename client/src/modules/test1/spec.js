import React from 'react';
import { shallow } from 'enzyme';
import Test1 from './index';

describe('Test1 component', () => {
  it('it should render without error', () => {
    const component = shallow(<Test1 />);
    const wrapper = component.find('.test1');
    expect(wrapper.length).toBe(1);
  });
});
