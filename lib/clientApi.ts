import axios from "axios";

export const fetchUser = async () => {
  const { data } = await axios.get('http://localhost:3000/api/users/cl849p21n0047x4gjt69x15s2');
  return data;
};
