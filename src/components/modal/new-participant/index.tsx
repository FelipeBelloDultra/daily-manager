// Packages
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const schema = yup.object().shape({
  name: yup.string().required().min(5),
  username: yup.string().required().min(5),
  doing: yup.string().required(),
  done: yup.string().required(),
  dificulties: yup.string(),
  others: yup.string(),
});

const NewParticipant = ({
  onUpdateParticipants,
}: INewParticipantProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<IInputFields>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus("name");
  }, []);

  const stepFormHasError = useMemo(() => {
    return (
      !!errors.doing?.message ||
      !!errors.done?.message ||
      !!errors.dificulties?.message ||
      !!errors.others?.message
    );
  }, [errors]);

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
        <Forms.InputGroup
          labelFor="name"
          label="Full name"
          error={errors.name?.message}
        >
          <Forms.Input
            hasError={!!errors.name?.message}
            {...register("name")}
          />
        </Forms.InputGroup>

        <Forms.InputGroup
          labelFor="username"
          label="Username"
          error={errors.username?.message}
        >
          <Forms.Input
            hasError={!!errors.username?.message}
            {...register("username")}
          />
        </Forms.InputGroup>
      </div>

      <span>
        <Steps
          error={stepFormHasError ? "Please check all fields" : ""}
          stepsItem={4}
          stepsTitle={["Doing", "Done", "Dificulties", "Others"]}
          onChangeItem={handleSelectInputStep}
          stepsContent={[
            {
              fieldName: "doing",
              content: (
                <Forms.InputGroup
                  labelFor="doing"
                  label="Doing"
                  error={errors.doing?.message}
                >
                  <Forms.Input
                    hasError={stepFormHasError}
                    {...register("doing")}
                  />
                </Forms.InputGroup>
              ),
            },
            {
              fieldName: "done",
              content: (
                <Forms.InputGroup
                  labelFor="done"
                  label="Done"
                  error={errors.doing?.message}
                >
                  <Forms.Input
                    hasError={stepFormHasError}
                    {...register("done")}
                  />
                </Forms.InputGroup>
              ),
            },
            {
              fieldName: "dificulties",
              content: (
                <Forms.InputGroup
                  labelFor="dificulties"
                  label="Dificulties"
                  error={errors.dificulties?.message}
                >
                  <Forms.Input
                    hasError={stepFormHasError}
                    {...register("dificulties")}
                  />
                </Forms.InputGroup>
              ),
            },
            {
              fieldName: "others",
              content: (
                <Forms.InputGroup
                  labelFor="others"
                  label="Others"
                  error={errors.others?.message}
                >
                  <Forms.Input
                    hasError={stepFormHasError}
                    {...register("others")}
                  />
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
