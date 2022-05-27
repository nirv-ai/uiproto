import { type FC, type ReactNode, type ReactElement } from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

import { IconButton, type IconInterface } from './IconButton';

export interface DefaultIconInterface extends IconInterface {
  children: ReactNode;
  Icon: ReactElement;
}

export const DefaultIcon: FC<DefaultIconInterface> = ({ Icon, desc, ...props }) => (
  <IconButton {...props} desc={desc}>
    {Icon}
  </IconButton>
);
DefaultIcon.displayName = 'DefaultIcon';

export const LoadingIcon = props => (
  <DefaultIcon {...props} desc="Loading..." Icon={<FaTruckLoading />} />
);
LoadingIcon.displayName = 'LoadingIcon';

export const CheckedIcon = props => (
  <DefaultIcon {...props} desc="Loading..." Icon={<GrCheckboxSelected />} />
);
CheckedIcon.displayName = 'CheckedIcon';

export const UncheckedIcon = props => (
  <DefaultIcon {...props} desc="Loading..." Icon={<GrCheckbox />} />
);
UncheckedIcon.displayName = 'UncheckedIcon';
