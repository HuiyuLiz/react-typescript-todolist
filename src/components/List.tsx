import React, { ReactNode } from 'react'
// library
import { List as ChakraList, ListItem } from '@chakra-ui/react'
// type
import type { Task } from '../types/task'

interface ListProps {
    data: Task[]
    render: (v: any) => ReactNode
}

const List = ({ data, render }: ListProps) => {
    return (
        <ChakraList spacing={3}>
            {data?.map((task, idx) => (
                <ListItem key={idx}>{render(task)}</ListItem>
            ))}
        </ChakraList>
    )
}

export default List
