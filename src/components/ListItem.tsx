import React from 'react'
// library
import {
    Flex,
    Box,
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    Checkbox,
} from '@chakra-ui/react'
import { HiOutlineTrash } from 'react-icons/hi'
// type
import type { Task } from '../types/task'

interface ListItemProps {
    data: Task
    handleChecked: (id: number) => void
    handleDelete: (id: number) => void
}

const ListItem = ({ data, handleChecked, handleDelete }: ListItemProps) => {
    return (
        <>
            <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                    <Checkbox
                        size="lg"
                        colorScheme="gray"
                        defaultChecked={data.checked}
                        onChange={() => handleChecked(data.id)}
                    >
                        {data.title}
                    </Checkbox>
                </Box>
                <Spacer />
                <ButtonGroup gap="2">
                    <Button
                        size="sm"
                        colorScheme="red"
                        variant="outline"
                        rightIcon={<HiOutlineTrash />}
                        onClick={() => handleDelete(data.id)}
                    >
                        Delete
                    </Button>
                </ButtonGroup>
            </Flex>
        </>
    )
}

export default ListItem
