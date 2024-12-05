import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { NewsContext } from '../store/NewsContext';

function AllExpenses() {
  const newsContext = useContext(NewsContext);

  return (
    <ExpensesOutput
      expenses={newsContext.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
