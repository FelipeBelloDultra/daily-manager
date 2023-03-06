// Packages
import classNames from "classnames";

// Interfaces
import { IInputHTMLAttributes, IReactNode } from "~/interfaces";

// Components
import InputGroup from "./input-group";
import InputIcon from "./input-icon";

interface IInputProps extends IInputHTMLAttributes<HTMLInputElement> {
  leftIcon?: IReactNode;
  rightIcon?: IReactNode;
  hasError?: boolean;
  name: string;
}

const Input = ({
  leftIcon,
  rightIcon,
  hasError = false,
  name,
  type = "text",
  ...rest
}: IInputProps): JSX.Element => {
  const INPUT_CLASSES = classNames(
    "w-full h-10 rounded-md border-2 shadow-sm px-4 text-black",
    {
      "bg-red-50 border-red-700": hasError,
      "bg-white border-blue-600": !hasError,
      "pl-[45px]": leftIcon,
      "pr-[45px]": rightIcon,
    }
  );

  return (
    <span className="inline-block h-10 w-full relative">
      {leftIcon ? leftIcon : null}

      <input name={name} type={type} className={INPUT_CLASSES} {...rest} />

      {rightIcon ? rightIcon : null}
    </span>
  );
};

Input.InputGroup = InputGroup;
Input.InputIcon = InputIcon;

export default Input;
