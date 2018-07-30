// React
import React from 'react';
import ReactDOM from 'react-dom';
// react-cookie
import { CookiesProvider } from 'react-cookie';
// Component
import App from './App';
// CSS
import './index.css';
import 'antd-mobile/dist/antd-mobile.min.css';

ReactDOM.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>
    , document.getElementById('root'));
