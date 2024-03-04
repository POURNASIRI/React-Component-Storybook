import { cn } from "../../utils"
import { InputProps, inputStyles } from "./input.types"

export const Input = ({className, ...props}:InputProps) => {
    return (
        <input
        type="text"
        autoComplete="off"
        {...props}
        className={cn(inputStyles({className}))}
        />
    )
}