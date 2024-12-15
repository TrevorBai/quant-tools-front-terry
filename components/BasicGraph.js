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
          width={Dimensions.get('window').width * 0.9} // Adjust for screen width
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: '#000000',
            backgroundGradientFrom: '#000000',
            backgroundGradientTo: '#000000',
            decimalPlaces: 2, // Optional, defaults to 2dp
            color: () => '#00FF33',
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 2})`,
            style: {
              borderRadius: 16,
            },
            fillShadowGradient: '#00FF33', // Solid green gradient
            fillShadowGradientOpacity: 0.8, // Gradient transparency
            propsForBackgroundLines: {
                stroke: 'transparent', // Makes grid lines transparent
            },
            propsForDots: {
              r: '0'
            },
          }}
          horizontalOffset={0} // Reduce extra space on sides
          fromZero={true} // Ensures Y-axis starts from 0
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
    </View>
  );
};

export default BasicGraph;