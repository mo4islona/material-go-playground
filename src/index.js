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

GoPlayground.loadSnippet = async function (key, server = 'https://play.golang.org/') {
  const body = await fetch(`${server}p/${key}`);
  return await body.text();
};

export default GoPlayground;
