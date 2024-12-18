import { View, Text, Dimensions } from 'react-native';
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

  const chartData = {
    // Note that the dates are not consecutively, since markets are not open at weekends
    // TODO: Need to convert hardcoded date into dynamic dates from fetched data.
    labels: ['12-10', '12-11', '12-12', '12-13', '12-16', '12-17'], 
    datasets: [{data: data}]
  };

  const chartConfig = {
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
  };

  const renderDotContent = ({ x, y, index }) => (
    <Text
      key={index}
      style={{
        position: 'absolute',
        left: x - 10, // Adjust position horizontally
        top: y - 20,  // Adjust position vertically
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {chartData.datasets[0].data[index]}
    </Text>
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width * .9} // Adjust for screen width
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          horizontalOffset={0} // Reduce extra space on sides
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          renderDotContent = {renderDotContent}     
        />
    </View>
  );
};

export default BasicGraph;