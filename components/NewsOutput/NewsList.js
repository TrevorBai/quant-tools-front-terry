import { FlatList } from 'react-native';
import NewsItem from './NewsItem';

function renderNewsItem(itemData) {
  return <NewsItem {...itemData.item} />;
}

function NewsList({ news }) {
  return (
    <FlatList
      data={news}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default NewsList;
