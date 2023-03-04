// Interfaces
import { IParticipants } from "~/interfaces";

interface IParticipantItemProps {
  participant: IParticipants;
}

const ParticipantItem = ({
  participant,
}: IParticipantItemProps): JSX.Element => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-md flex items-center py-[15px] px-[15px] hover:bg-white/75 transition-colors cursor-pointer">
      <span className="w-[185px]">
        <p className="text-lg truncate font-bold">{participant.name}</p>

        {!!participant.username ? (
          <span className="inline-block mt-[3px] text-xs truncate font-medium text-gray-500">
            {participant.username}
          </span>
        ) : null}
      </span>

      <div className="truncate pl-[15px]">
        <span className="truncate">{participant.message}</span>
      </div>
    </div>
  );
};

export default ParticipantItem;
