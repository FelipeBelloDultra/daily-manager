// Packages
import { useState } from "react";

// Interface
import { IReactNode } from "~/interfaces";

interface IStepsProps {
  stepsTitle: string[];
  stepsContent: IReactNode[];
  stepsItem: number;
}

const Steps = ({
  stepsTitle,
  stepsContent,
  stepsItem,
}: IStepsProps): JSX.Element | null => {
  if (stepsTitle.length !== stepsItem || stepsContent.length !== stepsItem)
    return null;

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  function handleChangeActiveStepByIndex(stepIndex: number) {
    setActiveStepIndex(stepIndex);
  }

  return (
    <div className="w-full border-2 rounded-md pb-5">
      <div className="flex justify-around">
        {stepsTitle.map((title, index) => (
          <div
            key={`header-${title}`}
            className={`flex items-center justify-center border-x border-b-2 flex-1 h-[45px] cursor-pointer transition-colors hover:bg-gray-100 ${
              activeStepIndex === index ? "bg-gray-100" : ""
            }`}
            onClick={() => handleChangeActiveStepByIndex(index)}
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
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Steps;
