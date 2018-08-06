import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom'

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

ReactDOM.render(<MuiThemeProvider theme={theme}><BrowserRouter><App /></BrowserRouter></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
