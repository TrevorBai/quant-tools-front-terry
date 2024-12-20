import axios from 'axios';

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=YOUR_API_KEY`
    );

    // Process the data
    const timeSeries = response.data['Time Series (Daily)'];
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const oneMonthData = {};
    for (const date in timeSeries) {
      if (new Date(date) >= oneMonthAgo) {
        oneMonthData[date] = timeSeries[date];
      }
    }
    console.log('One month data:', oneMonthData); // This will contain roughly 1 month's data
    return oneMonthData;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};