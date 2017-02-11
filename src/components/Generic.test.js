import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Generic from './Generic';

describe('Generic Component', () => {

  it('should render without throwing an error', () => {
    const actual = shallow(<Generic root='boom'>Boom</Generic>);
    const expected = <div className='boom'>Boom</div>;
    expect(actual.contains(expected)).toBe(true);
  });

  it('should mount in a full DOM', () => {
    const actual = <Generic root='boom' />;
    expect(mount(actual).find('.boom').length).toBe(1);
  });

  it('should render to static HTML', () => {
    const actual = <Generic root='boom'>Boom</Generic>;
    expect(render(actual).text()).toEqual('Boom');
  });

});
