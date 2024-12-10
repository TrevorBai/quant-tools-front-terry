import { StyleSheet, View, Text } from 'react-native';

function HomePageContents() {

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Home page content</Text>
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
