// Packages
import classNames from "classnames";

// Interfaces
import { IIconProps } from "~/interfaces";

interface IInputIconProps {
  onIconClicked?: () => void;
  isRight?: boolean;
  isLeft?: boolean;
  icon: IIconProps;
}

const InputIcon = ({
  onIconClicked,
  icon: Icon,
  isRight = false,
  isLeft = false,
}: IInputIconProps): JSX.Element => {
  const INPUT_ICON_CLASSES = classNames(
    "absolute inset-y-0 flex items-center justify-center",
    {
      "right-0 pr-[15px] pl-[5px]": !!isRight,
      "left-0 pl-[15px] pr-[5px]": !!isLeft,
      "cursor-pointer": !!onIconClicked,
    }
  );

  return (
    <span className={INPUT_ICON_CLASSES} onClick={onIconClicked}>
      <Icon />
    </span>
  );
};

export default InputIcon;
