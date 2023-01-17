import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './Redux/features/users/usersSlice';
// import { BrowserRouter } from 'react-router-dom';

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider >
    </React.StrictMode>
  </ChakraProvider>

);

reportWebVitals();
