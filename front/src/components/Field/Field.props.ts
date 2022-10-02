import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    placeHolder: string,
    type: string,
    value?: string,
    changeValue: any
}