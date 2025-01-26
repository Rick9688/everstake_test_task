import { axiosInstance } from './axios';

export const getEthPrice = async () => {
  try {
    const response = await axiosInstance.get('/historical/info');
    return response.data.eth_price.current;
  } catch (error) {
    console.error('Error fetching ETH price:', error);
    throw error;
  }
};

export const getStats = async (
  sortBy: string,
  page: number,
  rowsPerPage: number,
) => {
  try {
    const response = await axiosInstance.get('/entities/stats', {
      params: { sort_by: sortBy, page, limit: rowsPerPage },
    });
    return {
      items: response.data.items,
      totalCount: response.data.count,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};
