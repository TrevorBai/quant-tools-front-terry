import { useContext } from 'react';
import NewsOutput from '../components/NewsOutput/NewsOutput';
import { NewsContext } from '../store/NewsContext';

function News() {
  const newsContext = useContext(NewsContext);

  return (
    <NewsOutput
      expenses={newsContext.news}
      fallbackText="Put a list of Webviews here."
    />
  );
}

export default News;