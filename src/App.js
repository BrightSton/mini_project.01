import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { defaultTheme } from "./styles/theme";
import common from "./styles/common.css";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/configStore";
import React, { useEffect } from "react";
import { loadUser } from "./redux/modules/user";

function App() {
  const theme = defaultTheme;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      dispatch(loadUser(true));
    }
  });
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
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fontFamily.default}, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default App;
