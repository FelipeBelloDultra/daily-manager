// Packages
import ReactDOM from "react-dom";

// Interfaces
import { IReactNode } from "~/interfaces";

interface IReactPortalProps {
  containerId?: string;
  children: IReactNode;
}

const ReactPortal = ({
  containerId = "portal-root",
  children,
}: IReactPortalProps): JSX.Element => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);

    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};

export default ReactPortal;
