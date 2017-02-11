import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Main from './Main';

describe('Main Component', () => {

  it('should render without throwing an error', () => {
    const actual = shallow(<Main />);
    const expected = (
      <main className='sb-longform'>
        <p>This is where the main content will go.</p>
      </main>
    );

    expect(actual.contains(expected)).toBe(true);
  });

});
