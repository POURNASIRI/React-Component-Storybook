import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

export const inputStyles = cva([
    "w-full",
    "border",
    "border-gray-300",
    "p-2",
    "rounded-lg",
    "trasition-all",
    "duration-300",
    "outline-none",
    "focus:border-primary-500",
    "placeholder:text-gray-500",
    "placeholder:text-sm",
])


export type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>