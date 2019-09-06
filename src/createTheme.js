import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {[key]: {}});
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    });
  }

  return mergeDeep(target, ...sources);
}

export default function createTheme(type = 'dark', extend) {
  return createMuiTheme(mergeDeep({
    palette: {
      type,
      primary: {
        main: '#01acd7',
        contrastText: '#fff',
      }
    },
    typography: {
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
  }, extend));
}
