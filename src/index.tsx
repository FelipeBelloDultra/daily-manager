// Packages
import { useCallback, useState } from "react";

// Components
import { Modal, Button } from "~/components/common";
import {
  ParticipantItem,
  NewParticipantModal,
} from "~/components/participants";

// Hooks
import { useLocalStorage } from "~/hooks/use-local-storage";

// Intefaces
import { IParticipants } from "~/interfaces";

// Services
import { DownloadFile } from "~/services/download-file-service";

export const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const [participants, setParticipants] = useLocalStorage(
    "$participants",
    [] as IParticipants[]
  );

  const handleOpenNewParticipantModal = useCallback(
    (participantData: IParticipants) => {
      setParticipants([...participants, participantData]);
    },
    [participants]
  );

  const handleRemoveParticipantById = useCallback(
    (id: string) => {
      setParticipants(
        participants.filter((participant) => participant._id !== id)
      );
    },
    [participants]
  );

  function handleDownloadFile() {
    const date = new Date();

    const fileName = `daily-${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getTime()}`;

    const downloadFile = new DownloadFile(fileName);

    downloadFile.downloadJSON({
      date: date,
      data: participants,
    });
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

          <div className="w-[200px] self-end">
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
        {participants.length ? (
          participants.map((participant) => (
            <ParticipantItem
              key={participant._id}
              participant={participant}
              onRemoveParticipant={handleRemoveParticipantById}
            />
          ))
        ) : (
          <p className="font-bold text-4xl mt-11 text-gray-500 text-center">
            No information collected
          </p>
        )}
      </main>

      {participants.length ? (
        <div className="w-[200px] fixed right-[30px] bottom-[30px]">
          <Button onClick={handleDownloadFile}>Download Daily</Button>
        </div>
      ) : null}

      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="New participant"
        modalName="new-participant-modal"
      >
        <NewParticipantModal
          onClose={() => setShowModal(false)}
          onUpdateParticipants={handleOpenNewParticipantModal}
        />
      </Modal>
    </div>
  );
};
