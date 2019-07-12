import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
let listing = 29
fetch(`http://localhost:9999/${listing}/`)
.then(response => response.json())
.then(data => {
  ReactDOM.render(
    <App data={data} listing={listing} className="top"/>,
    document.getElementById('app')
    );
  })