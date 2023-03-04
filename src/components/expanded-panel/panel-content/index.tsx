// Intefaces
import { IReactNode } from "~/interfaces";

interface IPanelContentProps {
  children: IReactNode;
}

const PanelContent = ({ children }: IPanelContentProps): JSX.Element => {
  return <>{children}</>;
};

export default PanelContent;
