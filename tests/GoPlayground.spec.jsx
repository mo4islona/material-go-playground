import React from 'react';
import { shallow } from 'enzyme';
import { Typography, Toolbar } from '@material-ui/core';
import GoPlayground from '../src';
import App from '../src/App';
import Editor from '../src/Editor';
import Result from '../src/Result';

describe('GoPlayround', () => {
  it('should create default App', () => {
    const wrapper = shallow(<GoPlayground />);
    expect(wrapper.exists(App)).toBe(true);
  });

  it('should add title', () => {
    const wrapper = shallow(<GoPlayground title="Title" />);
    expect(wrapper.find(Toolbar).find(Typography).text()).toBe('Title');
  });

  it('should set editor height', () => {
    const wrapper = shallow(<GoPlayground editorHeight={100} />);
    expect(wrapper.find(Editor).props().style.height).toBe(100);
  });

  it('should set result height', () => {
    const wrapper = shallow(<GoPlayground resultHeight={100} />);
    expect(wrapper.find(Result).props().resultHeight).toBe(100);
  });

  it('should hide toolbar', () => {
    const wrapper = shallow(<GoPlayground hideHeader />);
    expect(wrapper.find(Toolbar).props().style.display).toBe('none');
  });
});
