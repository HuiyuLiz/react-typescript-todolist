import React from 'react'
// library
import { Heading as ChakraHeading } from '@chakra-ui/react'
interface HeadingProps {
    title?: string
}

const Heading = ({ title = 'To Do List' }: HeadingProps) => {
    return (
        <ChakraHeading color="red.400" my="20px">
            {title}
        </ChakraHeading>
    )
}

export default Heading
