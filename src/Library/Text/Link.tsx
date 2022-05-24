/**
 * @see https://react-spectrum.adobe.com/react-aria/useLink.html
 * @see https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
 */

import { useRef, type ReactNode, type FC, type ElementType } from 'react';
import { useLink } from 'react-aria';
import { useNavigate, useMatch } from 'react-router-dom';
import clsx from 'clsx';

type ElementTypes = 'span' | 'a';

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
  const activeProps = useMatch(props.href);

  const navigate = useNavigate();

  const Component = props.elementType as ElementType;

  const handleClick = () => {
    if (activeProps) return void 0;
    navigate(props.href);
    if (renderProps.hide) renderProps.hide();
  };

  return (
    <Component
      {...linkProps}
      className={clsx(activeProps && 'active')}
      href={props.href}
      onClick={handleClick}
      ref={ref}
      target={props.target}
    >
      {props.children}
    </Component>
  );
};

type CreateLinkType = (elementType: ElementTypes) => FC<LinkProps>;

const createLink: CreateLinkType = elementType => props =>
  <Link {...props} elementType={elementType} />;

export const A = createLink('a');
A.displayName = 'A';

export const NavLink = createLink('span');
NavLink.displayName = 'NavLink';
