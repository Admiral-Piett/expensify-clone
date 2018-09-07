import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no exepenses', () => {
    const expensesTotal = getExpensesTotal([]);
    expect(expensesTotal).toBe(0);
});

test('should correctly add a single expense', () => {
    const expensesTotal = getExpensesTotal([expenses[2]]);
    expect(expensesTotal).toBe(45000);
});

test('should correctly add up multiple expenses', () => {
    const expensesTotal = getExpensesTotal(expenses);
    expect(expensesTotal).toBe(154695);
});