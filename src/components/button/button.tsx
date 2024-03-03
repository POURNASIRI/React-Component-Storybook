import { cn } from "../../utils"
import { ButtonProps, buttonStyles } from "./button.types"




export const Button = ({variant,size,colorSchema, className,...props}:ButtonProps) => {
    return (

        <button
        {...props} 
        className={cn(buttonStyles({variant,size,colorSchema,className}))}>
           {props.children}
        </button>
    )
}