import { css } from '@emotion/react';

export const formsCss = css`
  label, .label {
    display: flex;
    gap: var(--spacing-XXS);
    justify-content: flex-start;
    align-items: center;
  }

  .small-label {
    > label:first-of-type {
      font-size: 0.7rem;
      text-transform: uppercase;
    }
  }

  input {
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: text;
  }

  .checkbox, [type=checkbox] {
    width: 1rem;
    height: 1rem;
  }

  .checkbox, [type=checkbox], label {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
