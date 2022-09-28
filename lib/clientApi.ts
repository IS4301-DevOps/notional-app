import axios from "axios";

/*---------------------------------------------------------
* User
* --------------------------------------------------------*/
export const fetchUser = async () => {
  const { data } = await axios.get(`/api/users/cl849p21n0047x4gjt69x15s2`);
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