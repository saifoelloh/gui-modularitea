import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import {
  Home
} from './container';

function App() {
  return (
    <div className="App h-100">
      <HashRouter>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
