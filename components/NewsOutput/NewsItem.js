import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getFormattedDate } from '../../util/date';

function NewsItem({ webViewUrl, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageWebView', {
      webViewUrl: 'https://google.com'
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.newsItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
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
      color: 'white',
    },
    description: {
      fontSize: 16,
      marginBottom: 4,
      fontWeight: 'bold',
    },
    amountContainer: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      minWidth: 80,
    },
    amount: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
