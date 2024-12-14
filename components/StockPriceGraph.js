import { View } from 'react-native';
import { useState, useEffect } from 'react';
// import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { fetchStockData } from '../utils/stockData';

const StockPriceGraph = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stockData = await fetchStockData(symbol);
      const prices = Object.values(stockData).map((day) => parseFloat(day['4. close']));
      setData(prices.slice(0, 30)); // Last 30 days
    };
    fetchData();
  }, [symbol]);

  return (
    <View style={{ height: 200, padding: 20 }}>
      <LineChart
        style={{ flex: 1 }}
        data={data}
        curve={shape.curveLinear}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    </View>
  );
};

export default StockPriceGraph;