/** @see https://reakit.io/docs/popover/#abstracting */

import React from 'react';
import { usePopoverState, Popover as BasePopover, PopoverDisclosure } from 'reakit/Popover';

export const Popover = ({ disclosure, ...props }) => {
  const popover = usePopoverState();

  console.info('\n\n popover state', popover);

  return (
    <>
      <PopoverDisclosure {...popover} ref={disclosure.ref} {...disclosure.props}>
        {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popover} {...props}>
        {props.children}
      </BasePopover>
    </>
  );
};
