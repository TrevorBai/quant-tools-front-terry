import { createContext } from 'react';

const DUMMY_NEWS = [
  {
    id: 'e1',
    newsDescription: 'Yahoo Finance',
    thumbnailKey: 'yahooFinanceThumbnail',
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    newsDescription: 'Google',
    thumbnailKey: 'googleThumbnail',
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    newsDescription: 'X.com',
    thumbnailKey: 'xDotComThumbnail',
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
