import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import { createGlobalStyle } from 'styled-components';
import LoadingScreen from './Reusable/LoadingScreen/LoadingScreen';


const App = lazy(() => import('./App'));

const GlobalStyles = createGlobalStyle`
  body {
    @import url(${"./Asset/Font/Louis\ George\ Cafe.ttf"});
    font-family: 'Louis-George-Cafe';
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingScreen />}>
        <div className="index">
          <App />
        </div>
      </Suspense>
    </Provider >
  </React.StrictMode>,
)
