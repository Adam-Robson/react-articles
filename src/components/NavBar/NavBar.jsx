import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <section>
        <nav>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/articles'>articles</Link></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
