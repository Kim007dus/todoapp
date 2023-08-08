function generateNewSortTypePriority(oldType) {
    if (!oldType || oldType === 'priority-low') {
        return 'priority-high';
    } else if(oldType === 'priority-high') {
        return 'priority-low'
    }
}

export default generateNewSortTypePriority;


