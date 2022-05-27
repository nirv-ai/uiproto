import { type FC } from 'react';
import { useVisuallyHidden } from 'react-aria';

import { getClass, Text, Button, type ButtonInterface } from 'src/Library';

export interface IconInterface extends ButtonInterface {
  desc: string;
}
export const IconButton: FC<IconInterface> = ({ desc, className, children, ...props }) => {
  const { visuallyHiddenProps } = useVisuallyHidden();

  const useClass = getClass(className, 'icon');

  return (
    <Button {...props} className={useClass}>
      {children}
      <Text ElType="mark" {...visuallyHiddenProps}>
        {desc}
      </Text>
    </Button>
  );
};
IconButton.displayName = 'IconButton';
