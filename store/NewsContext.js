import { createContext, useReducer } from 'react';

const DUMMY_NEWS = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  }
];

export const NewsContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    default:
      return state;
  }
}

function NewsContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_NEWS);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider;
