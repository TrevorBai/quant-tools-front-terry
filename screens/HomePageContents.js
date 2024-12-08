import { StyleSheet, View } from 'react-native';

function HomePageContents() {

  return (
    <View style={styles.container}>
      <p style={styles.infoText}>Home page content</p>
    </View>
  );
}

export default HomePageContents;

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
