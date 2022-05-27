import { type FC, type ReactNode } from 'react';
import { useId } from 'react-aria';

export interface LabelInterface {
  [x: string]: any;
  children?: ReactNode;
  id?: string;
}

/**
 * generally a form control should render this automatically
 */
export const Label: FC<LabelInterface> = ({ children, id, ...props }) => {
  const labelId = useId(id);

  return (
    <label {...props} id={labelId}>
      {children}
    </label>
  );
};
Label.displayName = 'Label';
