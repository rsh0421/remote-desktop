import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/css/style.css';
import MainPage from './pages/MainPage';

console.log(process.type);

ReactDOM.render(<MainPage/>, document.getElementById('root'));