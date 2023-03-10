// Packages
import { useForm } from "react-hook-form";

// Intefaces
import { IParticipants } from "~/interfaces";

// Components
import { Forms, Button, Steps } from "~/components";
import { useEffect } from "react";

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
  const { register, handleSubmit, setFocus } = useForm<IInputFields>();

  useEffect(() => {
    setFocus("name");
  }, []);

  function handleSelectInputStep(selectedItem: string) {
    setTimeout(() => {
      setFocus(selectedItem as keyof IInputFields);
    }, 100);
  }

  function handleUpdateParticipants(data: IInputFields) {
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

      <span>
        <Steps
          stepsItem={4}
          stepsTitle={["Doing", "Done", "Dificulties", "Others"]}
          onChangeItem={handleSelectInputStep}
          stepsContent={[
            {
              fieldName: "doing",
              content: (
                <Forms.InputGroup labelFor="doing" label="Doing">
                  <Forms.Input {...register("doing")} />
                </Forms.InputGroup>
              ),
            },
            {
              fieldName: "done",
              content: (
                <Forms.InputGroup labelFor="done" label="Done">
                  <Forms.Input {...register("done")} />
                </Forms.InputGroup>
              ),
            },
            {
              fieldName: "dificulties",
              content: (
                <Forms.InputGroup labelFor="dificulties" label="Dificulties">
                  <Forms.Input {...register("dificulties")} />
                </Forms.InputGroup>
              ),
            },
            {
              fieldName: "others",
              content: (
                <Forms.InputGroup labelFor="others" label="Others">
                  <Forms.Input {...register("others")} />
                </Forms.InputGroup>
              ),
            },
          ]}
        />
      </span>

      <div className="max-w-[400px]">
        <Button type="submit">Add new participant</Button>
      </div>
    </form>
  );
};

export default NewParticipant;
