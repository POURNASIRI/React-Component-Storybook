import { cn } from "../../utils"
import {  TextProps, textStyles } from "./text.types"

export const Text = ({className,size,colorSchema,...props}:TextProps) => {
    return (
        <span
        {...props}
        className={cn(textStyles({className,colorSchema,size}))}
        >
            {props.children}
        </span>
    )
}