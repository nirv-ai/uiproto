import React, { useRef, type FC, type ReactNode } from 'react';
import { useOverlayTriggerState } from 'react-stately';
import {
  FocusScope,
  OverlayContainer,
  useButton,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
} from 'react-aria';

interface ModuleDialogInterface {
  // title: string;
  children: ReactNode;
}

const ModalDialog = (props: ModuleDialogInterface) => {
  const { children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = useRef() as React.RefObject<HTMLElement>;
  /* @ts-ignore */
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  /* @ts-ignore */
  const { dialogProps } = useDialog(props, ref);

  return (
    <div
      css={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...underlayProps}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          /* @ts-ignore */
          ref={ref}
          style={{
            background: 'white',
            color: 'black',
            padding: 30,
          }}
        >
          {children}
        </div>
      </FocusScope>
    </div>
  );
};

interface ModalProps {
  ariaLabel: string;
  children: ReactNode;
  OpenButton: FC<any>;
  CloseButton?: FC<any>;
}

// currently not using title/ariaLabeledBy
// you are required to pass ariaLabel
export const Modal: FC<ModalProps> = ({
  children,
  ariaLabel,
  OpenButton,
  CloseButton,
  ...props
}) => {
  const state = useOverlayTriggerState({});
  const openButtonRef = useRef();
  const closeButtonRef = useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    /* @ts-ignore */
    openButtonRef
  );

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    /* @ts-ignore */
    closeButtonRef
  );

  const RenderCloseButton = () =>
    CloseButton ? <CloseButton {...closeButtonProps} ref={closeButtonRef} /> : null;

  return (
    <>
      <OpenButton {...openButtonProps} ref={openButtonRef} />
      {state.isOpen && (
        <OverlayContainer>
          {/* @ts-ignore */}
          <ModalDialog aria-label={ariaLabel} isDismissable isOpen onClose={state.close}>
            {children}
            <RenderCloseButton />
          </ModalDialog>
        </OverlayContainer>
      )}
    </>
  );
};
