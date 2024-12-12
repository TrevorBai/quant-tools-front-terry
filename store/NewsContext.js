import { createContext } from 'react';

const DUMMY_NEWS = [
  {
    id: '1',
    webViewUrl: 'https://finance.yahoo.com/',
    newsDescription: 'Yahoo Finance',
    thumbnailKey: 'yahooFinanceThumbnail',
    date: new Date('2021-12-19'),
  },
  {
    id: '2',
    webViewUrl: 'https://google.com',
    newsDescription: 'Google',
    thumbnailKey: 'googleThumbnail',
    date: new Date('2022-01-05'),
  },
  {
    id: '3',
    webViewUrl: 'https://x.com/',
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
