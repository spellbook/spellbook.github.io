import React from 'react';

const Generic = ({ root, modifiers, extras, children }) => {
  let modifiersList = '';
  const classes = extras ? ` ${ extras }` : '';

  if (modifiers) {
    modifiersList = modifiers.map((modifier) => {
      return ` ${ root }--${ modifier }`;
    }).join(' ');
  }

  return(
    <div className={ `${ root }${ modifiersList }${ classes }` }>
      { children }
    </div>
  );
};

export default Generic;
