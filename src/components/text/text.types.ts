import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

export const textStyles = cva([
    "font-sans",
    "text-base",
    "leading-relaxed",
    "text-gray-700",
],{
    variants:{
        variant:{
            primary:"font-bold",
            secondary:"font-semibold",
            tertiary:"font-medium",
        },
        size:{
            sm:"text-sm",
            md:"text-base font-medium",
            lg:"text-lg font-bold",
            xl:"text-2xl font-bold",
        },
        colorSchema:{
            primary:"text-primary-500",
            secondary:"text-secondary-500",
            tertiary:"text-tertiary-500",

        },
    },
    compoundVariants:[
        {
            variant:"primary",
            colorSchema:"primary",
            className:"text-primary-500",
        },
        {
            variant:"secondary",
            colorSchema:"secondary",
            className:"text-secondary-500",
        },
        {
            variant:"tertiary",
            colorSchema:"tertiary",
            className:"text-tertiary-500",
        }
    ],
    defaultVariants:{
        size:"md",
        colorSchema:"primary"
    }

}
)



export type TextProps = ComponentProps<'span'> & VariantProps<typeof textStyles>;