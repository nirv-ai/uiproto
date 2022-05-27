import { css } from '@emotion/react';

export const formsCss = css`
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
`;
