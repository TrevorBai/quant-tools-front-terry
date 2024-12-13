import { createContext } from 'react';

const DUMMY_NEWS = [
  {
    id: '1',
    webViewUrl: 'https://finance.yahoo.com/',
    newsDescription: 'Yahoo Finance',
    thumbnailKey: 'yahooFinanceThumbnail',
    publishTime: new Date('2024-12-11T11:51:00').toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
  },
  {
    id: '2',
    webViewUrl: 'https://google.com',
    newsDescription: 'Google',
    thumbnailKey: 'googleThumbnail',
    publishTime: new Date('2024-12-11T08:03:00').toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
  },
  {
    id: '3',
    webViewUrl: 'https://x.com/',
    newsDescription: 'X.com',
    thumbnailKey: 'xDotComThumbnail',
    publishTime: new Date('2024-12-11T23:39:00').toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
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
