import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode,
    side?: 'l' | 'c' | 'r',
    tag: 'h1' | 'h2' | 'h3'
}