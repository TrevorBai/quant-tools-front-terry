import { createContext } from 'react';

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

// A context without any actions yet
export const NewsContext = createContext({news: []});

function NewsContextProvider({ children }) {
  return (
    <NewsContext.Provider value={{news: DUMMY_NEWS}}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider;
