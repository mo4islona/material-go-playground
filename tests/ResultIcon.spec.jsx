import React from 'react';
import { shallow } from 'enzyme';
import Ok from '@material-ui/icons/Check';
import Error from '@material-ui/icons/Warning';
import ResultIcon from '../src/ResultIcon';

describe('ResultIcon', () => {
  it('should create success green', () => {
    const wrapper = shallow(<ResultIcon success color="green" />);
    expect(wrapper.props().style.color).toBe('green');
    expect(wrapper.exists(Ok)).toBe(true);
  });

  it('should create error red', () => {
    const wrapper = shallow(<ResultIcon success={false} color="red" />);
    expect(wrapper.props().style.color).toBe('red');
    expect(wrapper.exists(Error)).toBe(true);
  });
});
