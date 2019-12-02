import React from 'react';
import { Link } from 'react-router-dom';

function NavigationHeader() {
  const clubs = ['Portugal', 'benfica', 'porto'];

  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {clubs.map(club => {
          return (
            <li key={club}>
              <Link to={`/${club}`}>{club}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default NavigationHeader;
