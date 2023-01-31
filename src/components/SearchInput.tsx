import React from 'react'
// library
import { Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

interface SearchInputProps<T> {
    query: string
    setQuery: React.Dispatch<any>
    data: T[]
}

const SearchInput = <T extends {}>({
    query,
    setQuery,
    data,
}: SearchInputProps<T>) => {
    const isDisabled = !data.length

    return (
        <FormControl isDisabled={isDisabled} mb="15px">
            <FormLabel color="gray.500">Search</FormLabel>
            <Input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                disabled={!data.length}
            />
            <FormHelperText>Enter what you&apos;d like to find.</FormHelperText>
        </FormControl>
    )
}

export default SearchInput
