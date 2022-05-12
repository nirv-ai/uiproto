import React from 'react';
import { NavLink } from 'react-router-dom';

export const AppNav = () => (
  <aside>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/typography">Typography</NavLink>
        </li>
        <li>
          <NavLink to="/layouts">Layouts</NavLink>
        </li>
        <li>
          <NavLink to="/images">Images</NavLink>
        </li>
        <li>
          <NavLink to="/animation">Animations</NavLink>
        </li>
        <li>
          <NavLink to="/micro-interactions">Micro Interactions</NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);
