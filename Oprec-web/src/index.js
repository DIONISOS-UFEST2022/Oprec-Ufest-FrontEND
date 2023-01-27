import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import WebFont from 'webfontloader';
import LoadingScreen from './Reusable/LoadingScreen/LoadingScreen';

const App = lazy(() => import('./App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </Provider >
  </React.StrictMode>
);

const webFontConfig = {
  custom: {
    families: ['Rocket-Vintage'],
    urls: ['./Asset/Font/Rocket Vintage.ttf'],
  },
  classes: false,
  timeout: 1000,
  active: root, // invoked when fonts are active
};
WebFont.load(webFontConfig);
