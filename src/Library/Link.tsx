/**
 * for all navigation needs
 * combines react-aria, react router, and emotion into a single reusable interface
 * @see https://react-spectrum.adobe.com/react-aria/useLink.html
 * @see https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
 */
import React, { useRef, type ReactNode, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLink } from 'react-aria';
import { css } from '@emotion/react';

const anchorStyles = css`

`;

const navStyles = css`
  ${anchorStyles};

`;

// TODO:(noah) button, image, etc
// ^ need see what react-aria gives us for free
type ElementTypes = 'span' | 'a';

// TODO: (noah) classnames, css, etc
type LinkProps = {
  children: ReactNode;
  clicked?: boolean;
  elementType?: ElementTypes;
  href: string;
  target?: string;
};

const Link: FC<LinkProps> = props => {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps /*, isPressed*/ } = useLink(props, ref);

  const navigate = useNavigate();
  // const params = useParams();
  // if (props.clicked) {
  //   console.info('\n\n wtf are params', params);
  //   // navigate(props.href);
  // }

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
