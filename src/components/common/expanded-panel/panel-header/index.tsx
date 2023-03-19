// Intefaces
import { IReactNode } from "~/interfaces";

interface IPanelHeaderProps {
  children: IReactNode;
}

const PanelHeader = ({ children }: IPanelHeaderProps): JSX.Element => {
  return <>{children}</>;
};

export default PanelHeader;
