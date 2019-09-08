import createTheme from '../src/createTheme';

test('createTheme with light color will expect light theme', () => {
  expect(createTheme('light').palette.type).toBe('light');
});

test('createTheme with dark color will expect dark theme', () => {
  expect(createTheme('dark').palette.type).toBe('dark');
});

test('createTheme with object will create theme with white primary', () => {
  expect(createTheme({
    palette: {
      primary: {
        main: '#fff'
      }
    }
  }).palette.primary.main).toBe('#fff');
});

test('createTheme with mixed dark color will create theme with white primary', () => {
  const theme = createTheme('dark', {
    palette: {
      primary: {
        main: '#fff'
      }
    }
  });

  expect(theme.palette.primary.main).toBe('#fff');
  expect(theme.palette.type).toBe('dark');
});