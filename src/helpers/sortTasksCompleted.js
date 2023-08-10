function sortTasksCompleted(activeSortType, todosArray) {
    const shallowCopy = [...todosArray];

    if (activeSortType === 'completed') {
        shallowCopy.sort((a, b) => b.completed - a.completed);
    }
    if (activeSortType === 'not-completed') {
        shallowCopy.sort((a, b) => a.completed - b.completed);
    }
    return shallowCopy;
}

export default sortTasksCompleted;