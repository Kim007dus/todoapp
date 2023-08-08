function sortTasksCompleted(activeSortType, todosArray) {
    const shallowCopy = [...todosArray];

    if (activeSortType === 'completed') {
        shallowCopy.sort((a, b) => b.status - a.status);
    }
    if (activeSortType === 'not-completed') {
        shallowCopy.sort((a, b) => a.status - b.status);
    }
    return shallowCopy;
}

export default sortTasksCompleted;