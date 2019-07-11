import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
fetch("http://localhost:9999/19/")
.then(response => response.json())
.then(data => {
  ReactDOM.render(
    <App data={data}/>,
    document.getElementById('app')
    );
  })