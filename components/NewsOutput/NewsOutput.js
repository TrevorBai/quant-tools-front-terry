import { StyleSheet, Text, View } from 'react-native';
import NewsList from './NewsList';

function NewsOutput({ news, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (news.length > 0) {
    content = <NewsList news={news} />;
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

export default NewsOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: 'black',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});