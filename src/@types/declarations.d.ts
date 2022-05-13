// @see https://webpack.js.org/guides/typescript/#importing-other-assets
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.module.css';

/* returns the key of what was clicked */
declare type OnActionCb = ((e: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;

declare interface AriaMenuItemProps {
  /** Whether the menu item is disabled. */
  isDisabled?: boolean;

  /** Whether the menu item is selected. */
  isSelected?: boolean;

  /** A screen reader only label for the menu item. */
  'aria-label'?: string;

  /** The unique key for the menu item. */
  key?: Key;

  /** Handler that is called when the menu should close after selecting an item. */
  onClose?: () => void;

  /**
   * Whether the menu should close when the menu item is selected.
   * @default true
   */
  closeOnSelect?: boolean;

  /** Whether the menu item is contained in a virtual scrolling menu. */
  isVirtualized?: boolean;

  /** Handler that is called when the user activates the item. */
  onAction?: (key: Key) => void;
}

declare type AriaOnAction = ((key: Key) => void) | undefined;
