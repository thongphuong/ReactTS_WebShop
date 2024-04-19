import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/elegant-icons.css';
import './css/font-awesome.min.css';
import './icon/icon-font.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import CartRedux from './component/Redux/CartRedux';
import LoginContext from './context/LoginContext';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <GoogleOAuthProvider clientId="738527219124-3dgm53ia07ihadqm3orcbtagrud4oa3c.apps.googleusercontent.com">
        <React.StrictMode>
      <BrowserRouter basename="/">
        <Provider store={CartRedux}>
        <QueryClientProvider client={queryClient}>
          <App />
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
