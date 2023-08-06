

export function deleteTask (idParam) {
    setToDoList(toDoList=> {
        return toDoList.filter((todo) => (todo.id !== idParam))
    })
}