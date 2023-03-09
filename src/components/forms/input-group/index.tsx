// Interfaces
import { IReactNode } from "~/interfaces";

interface IInputGroupProps {
  children: IReactNode;
  error?: string;
}

const InputGroup = ({ error, children }: IInputGroupProps): JSX.Element => {
  return (
    <span
      className={`inline-block h-10 w-full space-y-[5px] ${
        error ? "text-red-700" : "text-blue-700"
      }`}
    >
      {children}

      {error ? (
        <p className="text-xs font-bold text-red-700 ml-[5px]">{error}</p>
      ) : null}
    </span>
  );
};

export default InputGroup;
