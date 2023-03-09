// Interfaces
import { IReactNode } from "~/interfaces";

interface IInputGroupProps {
  children: IReactNode;
  label: string;
  labelFor: string;
  error?: string;
}

const InputGroup = ({
  error,
  label,
  labelFor,
  children,
}: IInputGroupProps): JSX.Element => {
  return (
    <span
      className={`inline-block w-full ${
        error ? "text-red-700" : "text-blue-700"
      }`}
    >
      <label
        htmlFor={labelFor}
        className="mb-[2px] text-sm font-bold block text-gray-900"
      >
        {label}
      </label>

      {children}

      {error ? (
        <p className="text-xs font-bold text-red-700 ml-[5px] mt-[5px]">
          {error}
        </p>
      ) : null}
    </span>
  );
};

export default InputGroup;
