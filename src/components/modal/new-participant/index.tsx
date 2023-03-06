// Packages
import { Mail } from "react-feather";

// Intefaces
import { IParticipants } from "~/interfaces";

// Components
import { Input, Button } from "~/components";

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
      message: {
        doing: "DOING something",
        done: "DONE something",
        dificulties: "Nothing no",
        others: "",
      },
      username: "New username",
      createdAt: new Date().toLocaleString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });
  }

  return (
    <div className="flex flex-col space-y-3">
      <Button onClick={handleUpdateParticipants}> Add new participant</Button>

      <Input name="email" />
    </div>
  );
};

export default NewParticipant;
