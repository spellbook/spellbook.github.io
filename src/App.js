import React from 'react';
import Generic from './components/Generic';
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <div>
    <Generic root='sb-row' extras='sb-bc-base'>
      <Generic root='sb-cell' modifiers={ ['s'] }>
        <Generic root='sb-well' modifiers={ ['l'] }>
          <Header />
        </Generic>
      </Generic>
    </Generic>
    <Generic root='sb-row'>
      <Generic root='sb-cell' modifiers={ ['s'] }>
        <Generic root='sb-well' modifiers={ ['l'] }>
          <Main />
        </Generic>
      </Generic>
    </Generic>
  </div>
);

export default App;
