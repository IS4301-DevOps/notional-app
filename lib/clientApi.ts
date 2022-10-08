import axios from 'axios';

/*---------------------------------------------------------
 * User
 * --------------------------------------------------------*/
export const fetchUser = async (id: string) => {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
};

export const updateCarbonTarget = async (id: string, target: number) => {
  const { data } = await axios.post(`/api/users/${id}/${target}`);
  return data;
}

/*---------------------------------------------------------
 * Post
 * --------------------------------------------------------*/
export const getAllPosts = async () => {
  const { data } = await axios.get(`/api/posts`);
  return data;
};

/*---------------------------------------------------------
 * Tip
 * --------------------------------------------------------*/
export const getTodayTip = async () => {
  const { data } = await axios.get(`/api/tip/today`);
  return data;
};

/*---------------------------------------------------------
 * Transactions
 * --------------------------------------------------------*/
export const fetchUserTransactions = async (id: string) => {
  const { data } = await axios.get(`/api/users/${id}/transactions`);
  return data;
};

export const fetchUserTransactionsByDate = async (id: string, startDate: Date, endDate: Date) => {
  const { data } = await axios.post(`/api/users/${id}/transactions/dates`, {
    startDate,
    endDate,
  });
  return data;
};

export const fetchUserTransactionsByCategory = async (id: string, startDate: Date, endDate: Date) => {
  const { data } = await axios.post(`/api/users/${id}/transactions/dates/category`, {
    startDate,
    endDate,
  });
  return data;
};
