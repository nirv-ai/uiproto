import { css } from '@emotion/react';

export const formsCss = css`
  [disabled] {
    cursor: not-allowed;
  }
  
  input {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  label, .label {
    display: flex;
    gap: var(--spacing-XXS);
    justify-content: flex-start;
    align-items: center;
  }

  .checkbox, [type=checkbox] {
    width: 1rem;
    height: 1rem;
  }

  input, .checkbox, [type=checkbox], label {
    cursor: pointer;
  }

  .number-input-wrapper {
    > label:first-of-type {
      font-size: 0.7rem;
    }
  }
`;
