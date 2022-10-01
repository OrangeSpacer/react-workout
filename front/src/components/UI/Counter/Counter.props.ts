import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    value: string
}