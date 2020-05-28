import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/0_App/App';
import store from './store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

toast.configure();
render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
  </Provider>,
  document.getElementById('root')
);
