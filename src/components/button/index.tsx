// Interfaces
import { IReactNode, IButtonHTMLAttributes } from "~/interfaces";

interface IButtonProps extends IButtonHTMLAttributes<HTMLButtonElement> {
  children: IReactNode;
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
}

const Button = ({
  type = "button",
  variant = "primary",
  isDisabled = false,
  children,
  ...rest
}: IButtonProps) => {
  const buttonClasses =
    variant === "primary"
      ? "border-blue-600 bg-blue-600 hover:bg-blue-600/75"
      : "border-gray-600 bg-gray-600 hover:bg-gray-600/75";

  return (
    <button
      {...rest}
      disabled={isDisabled}
      type={type}
      className={`w-full h-10 rounded-md border-2  font-bold transition-colors shadow text-white ${buttonClasses} ${
        isDisabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
