// Packages
import { useState } from "react";

// Components
import { ParticipantItem, Modal } from "~/components";

// Hooks
import { useLocalStorage } from "~/hooks/use-local-storage";

// Intefaces
import { IParticipants } from "~/interfaces";

export const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const [participants, setParticipants] = useLocalStorage(
    "$participants",
    [] as IParticipants[]
  );

  function handleOpenNewParticipantModal(participantData: IParticipants) {
    setParticipants([...participants, participantData]);
  }

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show modal</button>

      {participants.length
        ? participants.map((participant) => (
            <ParticipantItem key={participant._id} participant={participant} />
          ))
        : null}

      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="New participant"
        modalName="new-participant-modal"
      >
        <Modal.NewParticipant
          onUpdateParticipants={(data) => handleOpenNewParticipantModal(data)}
        />
      </Modal>
    </div>
  );
};
