function generateNewSortTypeCompleted(oldType) {
    if (!oldType || oldType === 'not-completed') {
        return 'completed';
    } else if(oldType === 'completed') {
        return 'not-completed'
    }
}

export default generateNewSortTypeCompleted;