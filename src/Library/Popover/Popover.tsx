/** @see https://reakit.io/docs/popover/#abstracting */

import { cloneElement } from 'react';
import { usePopoverState, Popover as BasePopover, PopoverDisclosure } from 'reakit/Popover';

export const Popover = ({ disclosure, ...props }) => {
  const popoverState = usePopoverState();
  const Children = props.children;

  return (
    <>
      <PopoverDisclosure {...popoverState} ref={disclosure.ref} {...disclosure.props}>
        {disclosureProps => cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popoverState} {...props}>
        {typeof props.children === 'function' ? <Children renderProps={popoverState} /> : Children}
      </BasePopover>
    </>
  );
};
