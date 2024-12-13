import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NewsItem({ webViewUrl, newsDescription, thumbnailKey, publishTime }) {
  const navigation = useNavigation();

  const thumbnailImages = {
    yahooFinanceThumbnail: require('../../assets/images/YahooFinance.png'),
    googleThumbnail: require('../../assets/images/Google.png'),
    xDotComThumbnail: require('../../assets/images/XDotCom.jpeg'),
  };

  function expensePressHandler() {
    navigation.navigate('ManageWebView', {
      webViewUrl: webViewUrl
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.newsItem}>
        <View>
          <Text style={[styles.textBase, styles.newsDescription]}>
            {newsDescription}
          </Text>
          <Text style={styles.textBase}>{publishTime}</Text>
        </View>
        <View style={styles.thumbnailContainer}>
          <Image 
            source={thumbnailImages[thumbnailKey]}
            style={{ width: 80, height: 80, borderRadius: 5 }}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
    pressed: {
      opacity: 0.75,
    },
    newsItem: {
      padding: 12,
      marginVertical: 8,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 6,
      elevation: 3,
      shadowColor: 'grey',
      shadowRadius: 4,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
    },
    textBase: {
      paddingTop: 20,
      color: 'white',
    },
    newsDescription: {
      fontSize: 16,
      marginBottom: 4,
      fontWeight: 'bold',
    },
    thumbnailContainer: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      minWidth: 80,
    }
  });
