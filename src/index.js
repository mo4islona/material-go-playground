import { render } from 'react-dom';
import { createElement } from 'react';
import ShareButton from './ShareButton';
import createTheme from './createTheme';
import GoPlayground from './GoPlayground';

GoPlayground.create = (element, props) => {
  render(createElement(GoPlayground, props, null), element);
};
GoPlayground.ShareButton = ShareButton;
GoPlayground.createTheme = createTheme;

export default GoPlayground;
