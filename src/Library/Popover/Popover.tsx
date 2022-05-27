import { cloneElement } from 'react';
import { usePopoverState, Popover as BasePopover, PopoverDisclosure } from 'ariakit/popover';

export const Popover = ({ disclosure, children, ...props }) => {
  const popoverState = usePopoverState();

  const Children = children;
  return (
    <>
      <PopoverDisclosure state={popoverState}>
        {disclosureProps => cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover state={popoverState} {...props}>
        {typeof children === 'function' ? <Children renderProps={popoverState} /> : Children}
      </BasePopover>
    </>
  );
};

Popover.displayName = 'Popover';
