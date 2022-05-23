import React, { type FC } from 'react';
import { useSeparator } from 'react-aria';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface SeparatorInterface {
  orientation: 'vertical' | 'horizontal';
}
const StyledDiv = styled.div<SeparatorInterface>`
    background: gray;
    width: ${props => (props.orientation === 'vertical' ? '1px' : '100%')};
    height: ${props => (props.orientation === 'vertical' ? '100%' : '1px')};
    margin: ${props =>
      props.orientation === 'vertical' ? '0 var(--spacing-XS)' : 'var(--spacing-XS) 0'};
`;

export const Separator: FC<SeparatorInterface> = props => {
  const { separatorProps } = useSeparator(props);
  return <StyledDiv {...separatorProps} {...props} />;
};

const horizontalCss = css({
  display: 'flex',
  flexDirection: 'column',
});

const verticalCss = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  // TODO:(noah) this is wrong, but the fix is likely with flexbox
  height: 40,
});

export const Separated = props => {
  const useCss = props.orientation === 'vertical' ? verticalCss : horizontalCss;

  return (
    <article css={useCss} className={props?.className ?? false}>
      {props.firstChildren}
      <Separator orientation={props.orientation} />
      {props.secondChildren}
    </article>
  );
};
