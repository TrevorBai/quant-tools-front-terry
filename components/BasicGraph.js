import { View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { fetchStockData } from '../utils/stockData';

const BasicGraph = ({ symbol }) => {
  const [data, setData] = useState([]);

  console.log("I am here! Seriously?");
  
  useEffect(() => {
    const fetchData = async () => {
      const stockData = await fetchStockData(symbol); 
      console.log("Fetched data:", stockData);
      const prices = Object.values(stockData).map((day) => parseFloat(day['4. close'])).reverse();
      console.log("Closing prices:", prices);
      setData(prices.slice(-6)); // Last 6 days
    };
    fetchData();
  }, [symbol]);

  // Debugging updated `data` state
  // useEffect(() => {
  //   console.log("Updated data:", data);
  // }, [data]);

  const dataSet = {
    labels: ['12-09', '12-10', '12-11', '12-12', '12-13', '12-16'],
    datasets: [{data: data}]
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <LineChart
          data={{
            labels: ['12-09', '12-10', '12-11', '12-12', '12-13', '12-16'],
            datasets: [{data: data}]
          }}
          width={Dimensions.get('window').width * 0.9} // Adjust for screen width
          height={220}
          yAxisLabel="$"
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
              r: '5'
            },
            propsForBackgroundLines: {
              stroke: '#ccc', // Grid color
              strokeWidth: 1, // Grid line thickness
            },
          }}
          horizontalOffset={0} // Reduce extra space on sides
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          // renderDotContent={({ x, y, index }) => (
          //   <Text
          //     key={index}
          //     style={{
          //       position: 'absolute',
          //       left: x - 10, // Adjust position horizontally
          //       top: y - 20,  // Adjust position vertically
          //       fontSize: 10,
          //       color: 'white',
          //       fontWeight: 'bold',
          //     }}
          //   >
          //     {data[index]} {/* Show the data value */}
          //   </Text>
          // )}
        />
    </View>
  );
};

export default BasicGraph;