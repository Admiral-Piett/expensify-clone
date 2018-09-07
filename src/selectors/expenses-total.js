export default (expenses=[]) => {
    if (expenses.length==0) {
        return 0;
    } else {
        const amountMap = expenses.map((expense) =>  expense.amount);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const amountTotal = amountMap.reduce(reducer);
        
        return amountTotal
    }
};