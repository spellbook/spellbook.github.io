import React from 'react';

const Bucket = ({ media, content, modifiers }) => {
  let classes = {
    base: 'sb-bucket',
    media: 'sb-bucket-media',
    content: 'sb-bucket-content'
  };
  let modifiersList = '';

  if (modifiers) {
    modifiersList = modifiers.map((modifier) => {
      return `${ classes.base }--${ modifier }`;
    }).join(' ');
  }

  return(
    <div className={ `${ classes.base } ${ modifiersList }`}>
      <div className='sb-bucket-media'>
        { media }
      </div>
      <div className='sb-bucket-content'>
        { content }
      </div>
    </div>
  );
};

export default Bucket;
