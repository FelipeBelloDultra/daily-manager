// Packages
import { useEffect, useRef, FormEvent, useState } from "react";

// Intefaces
import { IParticipants } from "~/interfaces";

// Components
import { Forms, Button, Steps } from "~/components";

interface INewParticipantProps {
  onUpdateParticipants: (newParticipant: IParticipants) => void;
}

const NewParticipant = ({
  onUpdateParticipants,
}: INewParticipantProps): JSX.Element => {
  const [inputs, setInputs] = useState({
    doing: "",
    done: "",
    dificulties: "",
    others: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleUpdateParticipants(event: FormEvent) {
    event.preventDefault();

    console.log(inputs);

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
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleUpdateParticipants}
    >
      <div className="flex gap-4">
        <Forms.InputGroup labelFor="name" label="Full name">
          <Forms.Input ref={inputRef} name="name" />
        </Forms.InputGroup>

        <Forms.InputGroup labelFor="username" label="Username">
          <Forms.Input name="username" />
        </Forms.InputGroup>
      </div>

      <Steps
        stepsItem={4}
        stepsTitle={["Doing", "Done", "Dificulties", "Others"]}
        stepsContent={[
          <Forms.InputGroup labelFor="doing" label="Doing">
            <Forms.Input
              name="doing"
              value={inputs.doing}
              onChange={(event) =>
                setInputs((prev) => ({ ...prev, doing: event.target.value }))
              }
            />
          </Forms.InputGroup>,

          <Forms.InputGroup labelFor="done" label="Done">
            <Forms.Input
              name="done"
              value={inputs.done}
              onChange={(event) =>
                setInputs((prev) => ({ ...prev, done: event.target.value }))
              }
            />
          </Forms.InputGroup>,

          <Forms.InputGroup labelFor="dificulties" label="Dificulties">
            <Forms.Input
              name="dificulties"
              value={inputs.dificulties}
              onChange={(event) =>
                setInputs((prev) => ({
                  ...prev,
                  dificulties: event.target.value,
                }))
              }
            />
          </Forms.InputGroup>,

          <Forms.InputGroup labelFor="others" label="Others">
            <Forms.Input
              name="others"
              value={inputs.others}
              onChange={(event) =>
                setInputs((prev) => ({ ...prev, others: event.target.value }))
              }
            />
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
