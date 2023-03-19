// Packages
import { useState } from "react";
import classNames from "classnames";

// Interface
import { IReactNode } from "~/interfaces";

interface IStepsProps {
  stepsTitle: string[];
  stepsContent: { fieldName: string; content: IReactNode }[];
  stepsItem: number;
  error?: string;
  onChangeItem?: (fieldName: string) => void;
}

const Steps = ({
  stepsTitle,
  stepsContent,
  stepsItem,
  error,
  onChangeItem = (item: string) => {},
}: IStepsProps): JSX.Element | null => {
  if (stepsTitle.length !== stepsItem || stepsContent.length !== stepsItem)
    return null;

  const STEP_WRAPPER_CLASSES = classNames("w-full border-2 rounded-md pb-5", {
    "bg-red-50 border-red-700": !!error,
  });
  const STEP_HEADER_CLASSES = classNames(
    "flex items-center justify-center border-x border-b-2 flex-1 h-[45px] cursor-pointer transition-colors",
    {
      "hover:bg-gray-100": !error,
      "hover:bg-red-100": error,
    }
  );

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  function handleChangeActiveStepByIndex(stepIndex: number, fieldName: string) {
    onChangeItem(fieldName);
    setActiveStepIndex(stepIndex);
  }

  return (
    <>
      {!!error ? (
        <p className="text-xs font-bold text-red-700 ml-[5px] mt-[5px]">
          {error}
        </p>
      ) : null}

      <div className={STEP_WRAPPER_CLASSES}>
        <div className="flex justify-around">
          {stepsTitle.map((title, index) => (
            <div
              key={`header-${title}`}
              className={`
              ${STEP_HEADER_CLASSES}
              ${activeStepIndex === index && !error ? "bg-gray-100" : ""}
              ${activeStepIndex === index && error ? "bg-red-100" : ""}
              `}
              onClick={() =>
                handleChangeActiveStepByIndex(
                  index,
                  stepsContent[index].fieldName
                )
              }
            >
              <span className="font-medium text-gray-900 text-sm">{title}</span>
            </div>
          ))}
        </div>

        <div className="px-5 pt-5">
          {stepsContent.map((content, index) => (
            <span
              key={`content-${index}`}
              className={`${activeStepIndex !== index ? "hidden" : "block"}`}
            >
              {content.content}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Steps;
