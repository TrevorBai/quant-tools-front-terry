import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const BasicGraph = () =>
{
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={Dimensions.get('window').width / 3} // Adjust for screen width
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: '#000000',
            backgroundGradientFrom: '#000000',
            backgroundGradientTo: '#000000',
            decimalPlaces: 2, // Optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0'
            },
          }}
          horizontalOffset={0} // Reduce extra space on sides
          bezier // Optional for smoother curves
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
    </View>
  );
};

export default BasicGraph;