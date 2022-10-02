import axios from 'axios';

/*---------------------------------------------------------
 * User
 * --------------------------------------------------------*/
export const fetchUser = async (id: string) => {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
};

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