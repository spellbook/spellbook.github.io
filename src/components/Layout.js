import React from 'react';

const Layout = ({ children }) => (
  <div className='sb-row sb-bc-base'>
    <div className='sb-cell sb-well sb-well--l'>
      { children }
    </div>
  </div>
);

export default Layout;
