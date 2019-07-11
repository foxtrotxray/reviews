import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
let listing = 10
fetch(`http://localhost:9999/${listing}/`)
.then(response => response.json())
.then(data => {
  ReactDOM.render(
    <App data={data} listing={listing}/>,
    document.getElementById('app')
    );
  })