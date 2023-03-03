// Intefaces
import { IParticipants } from "@/interfaces";

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
    });
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleUpdateParticipants}> Add new participant</button>
    </div>
  );
};

export default NewParticipant;
