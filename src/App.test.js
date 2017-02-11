import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {

  it('should render without throwing an error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

});
