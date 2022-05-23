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
    margin: ${props => (props.orientation === 'vertical' ? '0 5px' : '5px 0')};
`;

export const Separator: FC<SeparatorInterface> = props => {
  console.info('\n\n ptops in separate', props);

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
  height: 40,
  marginTop: 20,
});

export const Separated = props => {
  console.info('\n\n wtf is props?', props);
  const useCss = props.orientation === 'vertical' ? verticalCss : horizontalCss;

  return (
    <article css={useCss}>
      {props.firstChildren}
      <Separator orientation={props.orientation} />
      {props.secondChildren}
    </article>
  );
};
