/** @see https://reakit.io/docs/popover/#abstracting */

import React from 'react';
import {
  usePopoverState,
  Popover as BasePopover,
  PopoverDisclosure,
  PopoverArrow,
} from 'reakit/Popover';

// interface PopoverInterface {
//   OpenButton: ReactElement<any>;
//   [x: string]: any;
// }

export const Popover = ({ disclosure, ...props }) => {
  const popover = usePopoverState();
  return (
    <>
      <PopoverDisclosure {...popover} ref={disclosure.ref} {...disclosure.props}>
        {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popover} {...props}>
        <PopoverArrow {...popover} />
        {props.children}
      </BasePopover>
    </>
  );
};
