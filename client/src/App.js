import { ThemeProvider } from "styled-components";

// *reset.js & theme.js
import { GlobalStyle } from "./globalstyle";
import theme from "./theme";

// *Pages
import Ohwunwan from "./pages/Ohwunwan";

function App() {  
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Ohwunwan />
      </ThemeProvider>
    </div>
  );
}

export default App;
