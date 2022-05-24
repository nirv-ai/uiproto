/**
 * TODO:(noah) speedrunning through; need to review props.orientation === vertical
 */
import React, { type FC } from 'react';
import { useSeparator } from 'react-aria';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface SeparatorInterface {
  orientation: 'vertical' | 'horizontal';
}
const StyledDiv = styled.div<SeparatorInterface>`
    background-color: gray;
    width: ${props => (props.orientation === 'vertical' ? '1px' : '100%')};
    height: ${props => (props.orientation === 'vertical' ? '100%' : '1px')};
    margin: ${props =>
      props.orientation === 'vertical' ? '0 var(--spacing-XS)' : 'var(--spacing-XS) 0'};
    margin-bottom: 0;
`;

export const Separator: FC<SeparatorInterface> = props => {
  const { separatorProps } = useSeparator(props);
  return <StyledDiv {...separatorProps} {...props} />;
};

const separatedCss = css({
  display: 'flex',
  flex: '1 1 80%',
});

const horizontalCss = css({
  flexDirection: 'column',
});

const verticalCss = css({
  alignItems: 'center',
  flexDirection: 'row',
  // TODO:(noah) this is wrong, but the fix is likely with flexbox
  height: 40,
});

export const Separated = props => {
  const useCss = props.orientation === 'vertical' ? verticalCss : horizontalCss;

  return (
    <section className="row" css={{ columnGap: '1ch' }}>
      <div css={[separatedCss, useCss]}>
        {props.firstChildren}
        <Separator orientation={props.orientation} />
        {props.secondChildren}
      </div>
      <div
        css={{
          backgroundColor: 'var(--color-scheme1-lightdark)',
          flex: '0 0 1ch',
          marginLeft: '2.1px',
        }}
      >
        {' '}
      </div>
    </section>
  );
};
