import { type FC, type ReactNode, type ReactElement } from 'react';
import { FaTruckLoading } from 'react-icons/fa';

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
