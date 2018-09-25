import RainbowText from '@charlesstover/rainbow-text';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends React.PureComponent {
  render() {
    return (
      <div className="rainbow-text">
        <MuiThemeProvider theme={theme}>
          <RainbowText />
        </MuiThemeProvider>
        <footer>
          &copy;{' '}
          <a href="https://charlesstover/" rel="noopener noreferrer" title="CharlesStover.com">Charles Stover</a>
        </footer>
      </div>
    );
  }
}

export default App;
