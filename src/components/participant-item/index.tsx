// Components
import { ExpandedPanel } from "~/components";

// Interfaces
import { IParticipants } from "~/interfaces";

interface IParticipantItemProps {
  participant: IParticipants;
}

const ParticipantItem = ({
  participant,
}: IParticipantItemProps): JSX.Element => {
  return (
    <ExpandedPanel>
      <ExpandedPanel.PanelHeader>
        <span className="w-[185px]">
          <p className="text-lg truncate font-bold">{participant.name}</p>

          {!!participant.username ? (
            <span className="inline-block mt-[3px] text-xs truncate font-medium text-gray-500">
              {participant.username}
            </span>
          ) : null}
        </span>

        <span className="ml-auto">{participant.createdAt}</span>
      </ExpandedPanel.PanelHeader>

      <ExpandedPanel.PanelContent>
        <span className="truncate">
          {Object.keys(participant.message).length
            ? Object.entries(participant.message).map(([key, value], index) => (
                <span key={`${participant._id}-${index}`}>
                  {key}: {value}
                </span>
              ))
            : null}
        </span>
      </ExpandedPanel.PanelContent>
    </ExpandedPanel>
  );
};

export default ParticipantItem;
