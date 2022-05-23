import React from 'react';
import { useSeparator } from 'react-aria';
import { css } from '@emotion/react';

const separatorCss = props =>
  css({
    backgroundColor: 'gray',
    width: props.orientation === 'vertical' ? '1px' : '100%',
    height: props.orientation === 'vertical' ? '100%' : '1px',
    margin: props.orientation === 'vertical' ? '0 5px' : '5px 0',
  });

export const Separator = props => {
  const { separatorProps } = useSeparator(props);

  return <div {...separatorProps} css={separatorCss} />;
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
  const useCss = props.orientation === 'vertical' ? verticalCss : horizontalCss;

  return (
    <div css={useCss}>
      {props.firstChildren}
      <Separator orientation={props.orientation} />
      {props.secondChildren}
    </div>
  );
};
