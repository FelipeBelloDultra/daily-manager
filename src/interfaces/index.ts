/**
 * PARTICIPANTS CONTEXT
 */
export interface IParticipants {
  _id: string;
  name: string;
  email?: string;
  message: {
    doing: string;
    done: string;
    dificulties?: string;
    others?: string;
  };
  createdAt: string;
}

/**
 * GLOBAL INTERFACES
 */
export type {
  ReactNode as IReactNode,
  HTMLAttributes as IHTMLAttributes,
  ButtonHTMLAttributes as IButtonHTMLAttributes,
  InputHTMLAttributes as IInputHTMLAttributes,
  ReactElement as IReactElement,
} from "react";

export type { Icon as IIconProps } from "react-feather";
