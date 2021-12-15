import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';

import configureStore from './redux/store/configureStore';
import App from './components/App/App';
import { THEME_CONSTANTS } from './constants';
import { Transform } from './utils';
import { ErrorBoundary, Helpers } from './components/Common';
import i18n from './i18n';

import './styles/main.scss';

import defaultThemeVariables from './styles/themes/_default.module.scss';
import darkThemeVariables from './styles/themes/_dark.module.scss';

const { ScrollRestoration } = Helpers;

i18n();

const store = configureStore();

const { session } = store.getState();

const themeVariableMapper = {
  DEFAULT: defaultThemeVariables,
  DARK: darkThemeVariables
};

const transformedVariables = Transform.serialize(
  themeVariableMapper[session.currentTheme || themeVariableMapper.DEFAULT]
);

const currentTheme = THEME_CONSTANTS[session.currentTheme] || THEME_CONSTANTS.DEFAULT;

let theme = createTheme(currentTheme(transformedVariables));

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="loading...">
      <ThemeProvider theme={theme}>
        <Router>
          <ErrorBoundary>
            <ScrollRestoration>
              <App />
            </ScrollRestoration>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
