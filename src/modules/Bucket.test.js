import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Bucket from './Bucket';

describe('Bucket Component', () => {

  it('should render without throwing an error', () => {
    const actual = mount(
      <Bucket
        media='boom'
        content='yeah' />
    );
    const expected = (
      <div className='sb-bucket'>
        <div className='sb-bucket-media'>
          boom
        </div>
        <div className='sb-bucket-content'>
          yeah
        </div>
      </div>
    );

    expect(actual.contains(expected)).toBe(true);
  });

  it('should render without throwing an error', () => {
    const actual = mount(
      <Bucket
        modifiers={ ['hell'] }
        media='boom'
        content='yeah' />
    );
    const expected = (
      <div className='sb-bucket sb-bucket--hell'>
        <div className='sb-bucket-media'>
          boom
        </div>
        <div className='sb-bucket-content'>
          yeah
        </div>
      </div>
    );

    expect(actual.contains(expected)).toBe(true);
  });

});
