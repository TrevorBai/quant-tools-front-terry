import axios from 'axios';

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=YOUR_API_KEY`
    );
    return response.data['Time Series (Daily)'];
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};