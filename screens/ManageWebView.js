import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

function ManageWebView({ route, navigation }) {

  const webViewUrl = route.params?.webViewUrl;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Show WebView',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WebView source={{ uri: webViewUrl }} />
    </View>
  );
}

export default ManageWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'white',
    alignItems: 'center',
  },
});
