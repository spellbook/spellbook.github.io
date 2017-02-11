import React from 'react';
import Bucket from '../modules/Bucket';
import logo from '../logo.svg';

const classes = {
  heading: 'sb-heading sb-heading--1 sb-tc-light',
  description: 'sb-tc-base-1'
};

const image = (
  <img src={ logo } alt='' width='100' />
);

const content = (
  <div>
    <h1 className={ classes.heading }>Spellbook CSS</h1>
    <p className={ classes.description }>
      A (S)CSS architecture for modular, maintanable systems
    </p>
  </div>
);

const Header = () => (
  <Bucket
    modifiers={ ['vc'] }
    media={ image }
    content={ content } />
);

export default Header;
