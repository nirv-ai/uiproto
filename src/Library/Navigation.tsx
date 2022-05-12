/**
 * for all navigation needs
 * @see https://react-spectrum.adobe.com/react-aria/useLink.html
 * @see https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
 */
import React, { useRef, type ReactNode, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLink } from 'react-aria';
import { css } from '@emotion/react';

const anchorStyles = css`
  display: inline;
`;

const navStyles = css`
  ${anchorStyles};
  display: inline-block;
`;

type ElementTypes = 'span' | 'a'; // todo: button

type LinkProps = {
  href: string;
  elementType?: ElementTypes;
  children: ReactNode;
  target?: string;
};

const Link: FC<LinkProps> = props => {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps /*, isPressed*/ } = useLink(props, ref);

  const navigate = useNavigate();

  const Component = props.elementType;
  let defaultCss;

  switch (Component) {
    case 'span':
      defaultCss = navStyles;
      break;
    case 'a':
      defaultCss = anchorStyles;
      break;
    default:
      throw new Error(`invalid component type: ${Component}`);
  }

  return (
    <Component
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
      onClick={() => navigate(props.href)}
      css={defaultCss}
    >
      {props.children}
    </Component>
  );
};

const createLink = (elementType: ElementTypes) => (props: LinkProps) =>
  <Link {...props} elementType={elementType} />;

export const A = createLink('a');
export const NavLink = createLink('span');
