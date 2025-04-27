import React from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
