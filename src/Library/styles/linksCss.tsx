import { css } from '@emotion/react';

export const linksCss = css`
/*@see https://medium.com/@dave_lunny/stylish-a-styling-e80c80cbc30e */
  a, .a,
  [role="link"] {
    cursor: pointer;
    color: var(--color-blue);

    /* regular anchor links */
    &:is(a) {
      &:hover {
        color: var(--color-scheme1-bluedark);
      }
    }

    /** navlinks */
    &:is(span) {
      display: block;
      position: relative;
      text-transform: uppercase;

      &:not(.active):before {
            background-color: black;
            bottom: -1px; /* again this can be adjusted based on line-height/font-size */
            content: '';
            height: 2px;  /* this can be modified based on the boldness of the font */
            position: absolute;
            width: 0;
            transition: width 0.6s ease-in-out;
      }

      &:hover {
        &:before {
          width: 100%;
        }
      }

      &.active {
        cursor: not-allowed;
      }
    } /* end navlinks */
  } /* end a, [role="link"] */
`;
