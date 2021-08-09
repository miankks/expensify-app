import moment from "moment";

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    // const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
            const createdAtMoment = moment(expense.createdAt)
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
            const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day'): true;
            // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            const textMatch = true;
    
            // figure out if expenses.description as the text variable string inside of it
            // methods to check such as include() 
            // good to convert both strings to lowercase
    
            return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
};

export default getVisibleExpenses;