import { ComponentProps } from "react";

import { VariantProps, cva } from "class-variance-authority"

export const buttonStyles = cva([
    "rounded-md",
    "font-semibold",
    "focus-outline-none",
    "disabled:cursor-not-allowed",
],
{
    variants:{
        variant:{
            solid:"",
            outline:"border-2",
            ghost:"trasition-colors duration-300",
        },
        size:{
            sm:"px-4 py-2 text-sm",
            md:"px-4 py-2 text-base",
            lg:"px-6 py-3 text-lg"
        },
        colorSchema:{
            primary:"text-white",
            secondary:"text-secondary-500",
            tertiary:"text-tertiary-500",
        },
       
    },
    compoundVariants:[
        {
            variant:"solid",
            colorSchema:"primary",
            className:"bg-primary-500 hover:bg-primary-600"
        },
        {
            variant:"outline",
            colorSchema:"primary",
            className:"text-primary-500 border-primary-500 hover:bg-primary-500/10 bg-transparent"
        },
        {
            variant:"ghost",
            colorSchema:"primary",
            className:"text-primary-500 hover:bg-primary-500/10 bg-transparent"
        }
    ],
    defaultVariants:{
        variant:"solid",
        size:"md",
        colorSchema:"primary"
    }
}
)

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>