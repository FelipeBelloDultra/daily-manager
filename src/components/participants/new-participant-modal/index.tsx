// Packages
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Intefaces
import { IParticipants } from "~/interfaces";

// Utils
import { utils } from "~/utils";

// Components
import { Forms, Button, Steps } from "~/components/common";

interface IInputFields {
  name: string;
  email: string;
  doing: string;
  done: string;
  dificulties: string;
  others: string;
}

interface INewParticipantModalProps {
  onUpdateParticipants: (newParticipant: IParticipants) => void;
  onClose: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required().min(5),
  email: yup.string().email().required(),
  doing: yup.string().required(),
  done: yup.string().required(),
  dificulties: yup.string(),
  others: yup.string(),
});

const NewParticipantModal = ({
  onUpdateParticipants,
  onClose,
}: INewParticipantModalProps): JSX.Element => {
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
      _id: utils.generateRandomId(),
      name: data.name,
      message: {
        doing: data.doing,
        done: data.done,
        dificulties: data.dificulties,
        others: data.others,
      },
      email: data.email,
      createdAt: new Date().toLocaleString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });

    onClose();
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
          labelFor="email"
          label="Email"
          error={errors.email?.message}
        >
          <Forms.Input
            hasError={!!errors.email?.message}
            {...register("email")}
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

export default NewParticipantModal;
