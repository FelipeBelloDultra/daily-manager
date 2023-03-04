// Packages
import { useState } from "react";

// Components
import { ParticipantItem, Modal, Button } from "~/components";

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
    <div className="mx-auto w-full max-w-[900px] pt-12">
      <header className="flex items-center justify-between px-6 py-7 border-b-2 border-blue-500">
        <h1 className="text-4xl text-blue-500 font-bold tracking-tighter">
          Daily <br /> Manager
        </h1>

        <div className="flex flex-col space-y-2">
          <div className="w-[200px]">
            <Button onClick={() => setShowModal(true)}>Show modal</Button>
          </div>

          <div className="w-[120px] self-end">
            <Button
              variant="secondary"
              onClick={() => setParticipants([])}
              isDisabled={!participants.length}
            >
              Reset
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-2 mt-5 pb-11">
        {participants.length
          ? participants.map((participant) => (
              <ParticipantItem
                key={participant._id}
                participant={participant}
              />
            ))
          : null}
      </main>

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
