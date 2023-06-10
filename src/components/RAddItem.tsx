import { useState, useEffect } from 'react'
import { todoItem } from '../interfaces/todoItem'
import { Input } from '@mui/material'

export default function RAddItem() {
  const [item, setItem] = useState<todoItem>({
    id: 1,
    title: '',
    description: '',
    dueDate: new Date(),
    endDate: null,
  })

  const [todoItems, setTodoItems] = useState<todoItem[]>([item])

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
  }, [todoItems])

  function setTitle(e) {
    setItem((prevState) => ({
      ...prevState,
      title: e.target.value,
    }))
  }

  function setDescription(e) {
    setItem((prevState) => ({
      ...prevState,
      description: e.target.value,
    }))
  }

  function pushItem(e) {
    e.preventDefault()
    setTodoItems((prevItems) => [...prevItems, item])
  }

  return (
    <form>
      <Input value={item.title} onChange={setTitle} type="text" />
      <Input
        type="text"
        onChange={setDescription}
        value={item.description}
      />
      <button onClick={pushItem}>Push item</button>
    </form>
  )
}