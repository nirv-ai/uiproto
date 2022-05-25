/**
 * @see https://react-spectrum.adobe.com/react-aria/useLink.html
 * @see https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
 */

import { createRef, type FC } from 'react';
import { useLink } from 'react-aria';
import { useNavigate, useMatch } from 'react-router-dom';

import { TextWithRef, type TextInterface } from './Text';
import { getClass } from 'src/Library/Utils';

export interface LinkInterface extends TextInterface {
  [x: string]: any;
  href: string;
  renderProps?: { [x: string]: any };
  target?: string;
}

export const Link: FC<LinkInterface> = ({ renderProps, className, ...props }) => {
  const ref = createRef<HTMLElement>();

  const activeProps = useMatch(props.href);

  // TODO: (noah) isPressed is an excellent opportunity for some micro interactions
  const { linkProps /*, isPressed*/ } = useLink(
    {
      ...props,
      isDisabled: !!activeProps,
      elementType: props.ElType,
    },
    ref
  );

  const navigate = useNavigate();

  const useRenderProps = renderProps?.renderProps ?? props.renderProps ?? {};

  const handleClick = () => {
    if (activeProps || props.ElType === 'a') return void 0;

    if (props.href.startsWith('http')) {
      if (props.target === '_blank') window.open(props.href, props.target);
      else window.location.assign(props.href);
    } else {
      navigate(props.href);
      if (useRenderProps.hide) useRenderProps.hide();
    }
  };

  const useClass = getClass(activeProps && 'active', className);

  return (
    <TextWithRef
      {...linkProps}
      {...props}
      className={useClass}
      href={props.href}
      onClick={handleClick}
      ref={ref}
      target={props.target}
    >
      {props.children}
    </TextWithRef>
  );
};
Link.displayName = 'Link';

export const A = props => <Link {...props} ElType="a" />;
A.displayName = 'A';

export const NavLink = props => <Link ariaRole="link" {...props} ElType="span" />;
NavLink.displayName = 'NavLink';
