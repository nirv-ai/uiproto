import React from 'react';

import { NavLink } from '../Library';

export const AppNav = () => (
  <aside>
    <nav>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/typography">Typography</NavLink>
        </li>
        <li>
          <NavLink href="/layouts">Layouts</NavLink>
        </li>
        <li>
          <NavLink href="/images">Images</NavLink>
        </li>
        <li>
          <NavLink href="/animation">Animations</NavLink>
        </li>
        <li>
          <NavLink href="/micro-interactions">Micro Interactions</NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);
