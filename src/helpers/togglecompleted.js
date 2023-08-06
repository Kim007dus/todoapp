export function toggleCompleted (idParam) {
    const clonedToDoList = [...toDoList]
    setToDoList(clonedToDoList.map ((todo) =>
        todo.id === idParam ? {...todo, status: !todo.status} : todo)
    )}