import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { NewsContext } from '../store/NewsContext';
import { getDateMinusDays } from '../util/date';

function RecentExpenses() {
  const newsContext = useContext(NewsContext);

  const recentExpenses = newsContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="Gateway to financial freedom in 7 years."
    />
  );
}

export default RecentExpenses;
