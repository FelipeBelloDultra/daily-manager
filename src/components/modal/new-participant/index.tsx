// Intefaces
import { IParticipants } from "~/interfaces";

interface INewParticipantProps {
  onUpdateParticipants: (newParticipant: IParticipants) => void;
}

const NewParticipant = ({
  onUpdateParticipants,
}: INewParticipantProps): JSX.Element => {
  function handleUpdateParticipants() {
    onUpdateParticipants({
      _id: crypto.randomUUID(),
      name: "John Doe",
      message: "EAASDASDASD",
      username: "New username",
      createdAt: new Date().toLocaleString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleUpdateParticipants}> Add new participant</button>
    </div>
  );
};

export default NewParticipant;
