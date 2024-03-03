import { Meta, StoryObj } from "@storybook/react"
import { Text } from "./text"




const meta: Meta<typeof Text> = {
    title: 'Text',
    component: Text,
    parameters: {
        layout:'centered'
    },
    tags: ['autodocs'],
}


export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        children: 'Text',
        size: 'md',
    }
}

export const primary: Story = {
    args: {
        children: 'Text',
        size: 'xl',
        colorSchema: 'primary'
    }
}

export const secondary: Story = {
    args: {
        children: 'Text',
        size: 'lg',
        colorSchema: 'secondary'
    }
}


export const tertiary: Story = {
    args: {
        children: 'Text',
        size: 'md',
        colorSchema: 'tertiary'
    }
}