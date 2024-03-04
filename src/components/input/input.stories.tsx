import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";



const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
    parameters:{
        layout:'centered'
    },
    tags: ['autodocs'],
}

export default meta


type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        type: 'text',
        placeholder: 'insert text here',
    }
}

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: ' password ',
    }
}


export const Email: Story ={
    args:{
        type: 'email',
        placeholder: 'Write your email address',
    }
}

