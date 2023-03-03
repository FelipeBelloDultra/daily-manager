// Packages
import { X } from "react-feather";

// Interfaces
import { IReactNode } from "~/interfaces";

// Components
import { ReactPortal } from "~/components";

// Child components
import NewParticipant from "./new-participant";

interface IModalProps {
  children: IReactNode;
  isVisible: boolean;
  modalName: string;
  title: string;
  onClose: () => void;
}

const Modal = ({
  modalName,
  isVisible,
  title,
  onClose,
  children,
}: IModalProps): JSX.Element | null => {
  if (!isVisible) return null;

  return (
    <ReactPortal containerId={modalName}>
      <div
        className="fixed inset-0 flex items-center justify-center bg-slate-600/50"
        onClick={onClose}
      >
        <div
          className="h-[500px] max-w-[600px] w-full bg-white rounded-md border-2 shadow"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="border-b-2 flex items-center px-6 py-8 justify-between">
            <p className="text-2xl font-medium">{title}</p>

            <button
              onClick={onClose}
              className="rounded border-2 text-blue-500 border-blue-500"
            >
              <X size={30} />
            </button>
          </div>

          <div className="p-5">{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
};

Modal.NewParticipant = NewParticipant;

export default Modal;
