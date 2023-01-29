import React, { useState, useMemo } from 'react'
// library
import { Container } from '@chakra-ui/react'
// type
import type { Task } from './types/task'
// components
import Heading from './components/Heading'
import SearchInput from './components/SearchInput'
import NewTaskInput from './components/NewTaskInput'
import List from './components/List'
import ListItem from './components/ListItem'

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: 'Write some code!',
            checked: false,
        },
        {
            id: 2,
            title: 'Send Emails... ',
            checked: true,
        },
    ])

    const [query, setQuery] = useState<any>()

    const createNewTask = (title: string) => {
        return {
            id: Date.now(),
            title,
            checked: false,
        }
    }

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            return query
                ? task.title.toLowerCase().includes(query.toLowerCase())
                : tasks
        })
    }, [tasks, query])

    const handleChecked = (id: number) => {
        const checkedIndex = tasks.findIndex((task) => task.id === id)
        const newTasks = [...tasks]
        newTasks[checkedIndex].checked = !newTasks[checkedIndex].checked

        setTasks(newTasks)
    }

    const handleDelete = (id: number) => {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
    }

    const handleSubmit = (v: string) => {
        const newTasks = [...tasks]
        newTasks.push(createNewTask(v))
        setTasks(newTasks)
    }

    return (
        <Container maxW="2xl" p="20px">
            <Heading></Heading>

            <SearchInput
                data={tasks}
                query={query}
                setQuery={setQuery}
            ></SearchInput>

            <NewTaskInput onHandleSubmit={handleSubmit}></NewTaskInput>

            <List
                data={filteredTasks}
                render={(task) => (
                    <ListItem
                        data={task}
                        handleChecked={handleChecked}
                        handleDelete={handleDelete}
                    ></ListItem>
                )}
            ></List>
        </Container>
    )
}

export default App
