import { type FC } from 'react';
import { useVisuallyHidden } from 'react-aria';

import { getClass, Text, Button, type ButtonInterface } from 'src/Library';

export interface IconsInterface extends ButtonInterface {
  desc: string;
}
// by default renders button, but set ElType to anything
export const Icons: FC<IconsInterface> = ({ desc, className, children, ...props }) => {
  const { visuallyHiddenProps } = useVisuallyHidden();

  const useClass = getClass(className, 'Icon');

  return (
    <Button {...props} className={useClass}>
      {children}
      <Text ElType="mark" {...visuallyHiddenProps}>
        {desc}
      </Text>
    </Button>
  );
};
Icons.displayName = 'Icons';
