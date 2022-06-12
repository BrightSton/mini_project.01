import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';
import { defaultTheme } from './styles/theme';
import common from './styles/common.css';
import { Provider } from 'react-redux';
import store from './redux/configStore';

function App() {
  const theme = defaultTheme;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
${common}; // Reset CSS

body, button, input, textarea {
  color: ${props => props.theme.color.black};
  font-family: ${props => props.theme.fontFamily.default}, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default App;