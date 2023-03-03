import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
}

const Card = ({ children }: ICardProps): JSX.Element => {
  return <div>{children}</div>;
};

export default Card;
