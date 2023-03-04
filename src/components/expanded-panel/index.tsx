// Packages
import { useState, Children } from "react";

// Child components
import PanelHeader from "./panel-header";
import PanelContent from "./panel-content";

// Intefaces
import { IReactNode, IReactElement } from "~/interfaces";

interface IExpandedPanelProps {
  children: IReactNode;
}

const ExpandedPanel = ({ children }: IExpandedPanelProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white border-2 border-gray-300 rounded-md hover:bg-white/75 transition-colors cursor-pointer"
      onClick={() => setIsExpanded((prevState) => !prevState)}
    >
      <div className="flex items-center p-[15px]">
        {Children.toArray(children).find(
          (child) => (child as IReactElement).type === PanelHeader
        )}
      </div>

      <div
        className={`block h-auto max-h-0 m-0 overflow-hidden ${
          isExpanded ? "max-h-[1000px]" : ""
        }`}
      >
        <div className="p-[15px] border-t-2">
          {Children.toArray(children).find(
            (child) => (child as IReactElement).type === PanelContent
          )}
        </div>
      </div>
    </div>
  );
};

ExpandedPanel.PanelHeader = PanelHeader;
ExpandedPanel.PanelContent = PanelContent;

export default ExpandedPanel;
