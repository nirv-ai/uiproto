/**
 * for all navigation needs
 * combines react-aria, react router, and emotion into a single reusable interface
 * @see https://react-spectrum.adobe.com/react-aria/useLink.html
 * @see https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
 */

import React, { useRef, type ReactNode, type FC, type ElementType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLink } from 'react-aria';

type ElementTypes = 'span' | 'a';

// TODO: (noah) classnames, css, etc
type LinkProps = {
  renderProps: { [x: string]: any };
  children: ReactNode;
  clicked?: boolean;
  elementType?: ElementTypes;
  href: string;
  target?: string;
};

const Link: FC<LinkProps> = props => {
  const renderProps = props.renderProps.renderProps ?? props.renderProps;
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps /*, isPressed*/ } = useLink(props, ref);

  const navigate = useNavigate();
  // const params = useParams();
  // if (props.clicked) {
  //   console.info('\n\n wtf are params', params);
  //   // navigate(props.href);
  // }

  const Component = props.elementType as ElementType;

  const handleClick = () => {
    navigate(props.href);
    if (renderProps.hide) renderProps.hide();
  };
  return (
    <Component
      {...linkProps}
      href={props.href}
      onClick={handleClick}
      ref={ref}
      target={props.target}
    >
      {props.children}
    </Component>
  );
};

const createLink = (elementType: ElementTypes) => (props: LinkProps) =>
  <Link {...props} elementType={elementType} />;

export const A = createLink('a');
export const NavLink = createLink('span');
