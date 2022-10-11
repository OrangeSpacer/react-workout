import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    textButton? : string,
    imgPath?: string
}