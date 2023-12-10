export const fieldtypeToTitle = (type: string) => {
    if (type === 'text') {
        return 'Event Name'
    }
    if (type === 'date') {
        return 'Date'
    }
    if (type === "time") {
        return 'Time'
    }
    if (type === 'number') {
        return 'Budget'
    }

}