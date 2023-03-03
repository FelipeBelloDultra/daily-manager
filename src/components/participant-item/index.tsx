// Interfaces
import { IParticipants } from "@/interfaces";

interface IParticipantItemProps {
  participant: IParticipants;
}

const ParticipantItem = ({
  participant,
}: IParticipantItemProps): JSX.Element => {
  return (
    <div>
      <p>{participant.name}</p>
      <span>{participant.username}</span>
      <div>
        <span>{participant.message}</span>
      </div>
    </div>
  );
};

export default ParticipantItem;
