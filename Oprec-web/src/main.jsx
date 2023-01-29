import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import LoadingScreen from './Reusable/LoadingScreen/LoadingScreen';


const App = lazy(() => import('./App'));

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
