function sortTasksPriority(activeSortType, todosArray) {
    const shallowCopy = [...todosArray];

    if (activeSortType === 'priority-high') {
        shallowCopy.sort((a, b) => a.priority - b.priority);
    }
    if (activeSortType === 'priority-low') {
        shallowCopy.sort((a, b) => b.priority - a.priority);
    }
    return shallowCopy;
}

export default sortTasksPriority;