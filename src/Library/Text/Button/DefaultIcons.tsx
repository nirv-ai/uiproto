import { AiOutlineCheckCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FaTruckLoading, FaMinus, FaPlus } from 'react-icons/fa';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
import { type FC, type ReactNode, type ReactElement } from 'react';

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

export const PlusIcon = props => <DefaultIcon {...props} Icon={<FaPlus />} />;
PlusIcon.displayName = 'PlusIcon';

export const MinusIcon = props => <DefaultIcon {...props} Icon={<FaMinus />} />;
MinusIcon.displayName = 'MinusIcon';

export const CircleCheckIcon = props => <DefaultIcon {...props} Icon={<AiOutlineCheckCircle />} />;
CircleCheckIcon.displayName = 'CircleCheckIcon';

export const CircleXIcon = props => <DefaultIcon {...props} Icon={<MdOutlineCancel />} />;
CircleXIcon.displayName = 'CircleXIcon';

export const CircleMinusIcon = props => <DefaultIcon {...props} Icon={<AiOutlineMinusCircle />} />;
CircleMinusIcon.displayName = 'CircleMinusIcon';
