// Packages
import { useForm } from "react-hook-form";

// Intefaces
import { IParticipants } from "~/interfaces";

// Components
import { Forms, Button, Steps } from "~/components";

interface IInputFields {
  name: string;
  username: string;
  doing: string;
  done: string;
  dificulties: string;
  others: string;
}

interface INewParticipantProps {
  onUpdateParticipants: (newParticipant: IParticipants) => void;
}

const NewParticipant = ({
  onUpdateParticipants,
}: INewParticipantProps): JSX.Element => {
  const { register, handleSubmit } = useForm<IInputFields>();

  function handleUpdateParticipants(data: IInputFields) {
    console.log(data);

    onUpdateParticipants({
      _id: crypto.randomUUID(),
      name: data.name,
      message: {
        doing: data.doing,
        done: data.done,
        dificulties: data.dificulties,
        others: data.others,
      },
      username: data.username,
      createdAt: new Date().toLocaleString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });
  }

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit(handleUpdateParticipants)}
    >
      <div className="flex gap-4">
        <Forms.InputGroup labelFor="name" label="Full name">
          <Forms.Input {...register("name")} />
        </Forms.InputGroup>

        <Forms.InputGroup labelFor="username" label="Username">
          <Forms.Input {...register("username")} />
        </Forms.InputGroup>
      </div>

      <Steps
        stepsItem={4}
        stepsTitle={["Doing", "Done", "Dificulties", "Others"]}
        stepsContent={[
          <Forms.InputGroup labelFor="doing" label="Doing">
            <Forms.Input {...register("doing")} />
          </Forms.InputGroup>,

          <Forms.InputGroup labelFor="done" label="Done">
            <Forms.Input {...register("done")} />
          </Forms.InputGroup>,

          <Forms.InputGroup labelFor="dificulties" label="Dificulties">
            <Forms.Input {...register("dificulties")} />
          </Forms.InputGroup>,

          <Forms.InputGroup labelFor="others" label="Others">
            <Forms.Input {...register("others")} />
          </Forms.InputGroup>,
        ]}
      />

      <div className="max-w-[400px]">
        <Button type="submit">Add new participant</Button>
      </div>
    </form>
  );
};

export default NewParticipant;
