import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import cursor from "./Asset/Image/OtherIcon/cursor.png";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <div className="index">
      <App />
    </div>
  </Provider >
  //</React.StrictMode> 
  ,
)
