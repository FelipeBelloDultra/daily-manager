/**
 * PARTICIPANTS CONTEXT
 */
export interface IParticipants {
  _id: string;
  name: string;
  username?: string;
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
  ReactElement as IReactElement,
} from "react";
