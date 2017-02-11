import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';
import Bucket from '../modules/Bucket';

describe('Header Component', () => {

  it('should render without throwing an error', () => {
    const actual = mount(<Header />);
    const expected = (
      <div className='sb-bucket sb-bucket--vc'>
        <div className='sb-bucket-media'>
          <img src='logo.svg' alt='' width='100' />
        </div>
        <div className='sb-bucket-content'>
          <div>
            <h1 className='sb-heading sb-heading--1 sb-tc-light'>Spellbook CSS</h1>
            <p className='sb-tc-base-1'>
              A (S)CSS architecture for modular, maintanable systems
            </p>
          </div>
        </div>
      </div>
    );

    expect(actual.contains(expected)).toBe(true);
  });

});
