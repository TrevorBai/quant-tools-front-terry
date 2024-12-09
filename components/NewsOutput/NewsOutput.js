import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import NewsList from './NewsList';

function NewsOutput({ expenses, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <NewsList news={expenses} />;
  }

  return (
    <View style={styles.container}>
      {content}
      {/* <WebView source={{ uri: 'https://google.com' }} /> */}
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