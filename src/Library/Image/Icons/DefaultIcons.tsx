import { AiOutlineCheckCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FaTruckLoading, FaMinus, FaPlus } from 'react-icons/fa';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
import { type FC, type ReactNode, type ReactElement } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

import { Icons, type IconsInterface } from 'src/Library';

export interface DefaultIconsInterface extends IconsInterface {
  children: ReactNode;
  Icon: ReactElement;
}

export const DefaultIcon: FC<DefaultIconsInterface> = ({ Icon, desc, ...props }) => (
  <Icons {...props} desc={desc}>
    {Icon}
  </Icons>
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

export const ToggleOffIcon = props => <DefaultIcon {...props} Icon={<BsToggleOff />} />;
ToggleOffIcon.displayName = 'ToggleOffIcon';

export const ToggleOnIcon = props => <DefaultIcon {...props} Icon={<BsToggleOn />} />;
ToggleOnIcon.displayName = 'ToggleOnIcon';
