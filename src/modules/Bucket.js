import React from 'react';
import Generic from '../components/Generic';

const Bucket = ({ media, content, modifiers }) => {
  let classes = {
    base: 'sb-bucket',
    media: 'sb-bucket-media',
    content: 'sb-bucket-content'
  };

  return(
    <Generic
      root={ classes.base }
      modifiers={ modifiers }>
      <div className='sb-bucket-media'>
        { media }
      </div>
      <div className='sb-bucket-content'>
        { content }
      </div>
    </Generic>
  );
};

export default Bucket;
