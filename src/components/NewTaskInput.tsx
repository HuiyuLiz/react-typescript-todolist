import React, { useRef } from 'react'
// library
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

interface NewTaskInputProps {
    onHandleSubmit: (v: string) => void
}

const NewTaskInput = ({ onHandleSubmit }: NewTaskInputProps) => {
    const newTask = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
        e?.preventDefault()
        const v = newTask.current?.value.trim()
        if (!v) return
        onHandleSubmit(v)

        if (!newTask.current) return
        newTask.current.value = ''
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(undefined)
        }
    }

    return (
        <FormControl isRequired mb="15px">
            <FormLabel color="gray.500">To do</FormLabel>
            <Input
                placeholder="What needs to be done?"
                ref={newTask}
                onKeyDown={handleKeyDown}
            />
        </FormControl>
    )
}

export default NewTaskInput
