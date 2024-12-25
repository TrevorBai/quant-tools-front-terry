import { View, Text, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { fetchStockData } from '../utils/stockData';

const BasicGraph = ({ symbol }) => {
  const [chartData, setChartData] = useState({ prices: [], dates: [] });

  console.log("I am here! Seriously?");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockData = await fetchStockData(symbol); 
        // console.log("Fetched data:", stockData);
        const prices = Object.values(stockData)
          .map(data => parseFloat(data['4. close']))
          .filter(price => !isNaN(price) && isFinite(price))
          .reverse();
        console.log("Closing prices:", prices);

        const dates = Object.keys(stockData).map(date => date.slice(-5)).reverse();
        console.log("Closing dates:", dates);
        if (prices.length === 0 || dates.length === 0) {
          console.error("No valid stock data found for symbol:", symbol);
          return;
        }

        setChartData({ prices: prices, dates: dates });
      }
      catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchData();
  }, [symbol]);

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
      {chartData.prices[index]}
    </Text>
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <LineChart
          data={{
            labels: chartData.dates.map((label, index) => index % 5 === 0 ? label : ''),
            // labels: [1, 2, 3],
            datasets: [{ data: chartData.prices }]
            // datasets: [{ data: [1, 2, 3]}]
          }}
          width={Dimensions.get('window').width * .9} // Adjust for screen width
          height={200}  // different height could cause an M -Infinite ... error,
          // I think it's about rendering of the graph, not a big deal. 
          yAxisLabel="$"
          chartConfig={chartConfig}
          horizontalOffset={0} // Reduce extra space on sides
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          // renderDotContent = {renderDotContent}     
        />
    </View>
  );
};

export default BasicGraph;