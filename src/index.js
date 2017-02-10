import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router} from './components/Router'

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
