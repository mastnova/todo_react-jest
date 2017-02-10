import React from 'react';
import {Link} from '../Router';

export const Footer = (props) => {
  return (
    <div className="footer">
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Complete</Link>
    </div>
  )
}
