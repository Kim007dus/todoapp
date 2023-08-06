function sortOnHighPriority(sortedTasks) {
    if (sortedTasks !== true) {
        return toDoList.sort((a, b) => a.priority - b.priority)
    }}


function sortOnLowPriority (sortedTasks) {
    if (sortedTasks !== false) {
        return toDoList.sort((a, b) => b.priority - a.priority)
    }
}