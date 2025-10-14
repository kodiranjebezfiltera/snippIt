import axios from 'axios';

export const addCategory = async (category: string) => {
  const response = await axios.post('http://localhost:3000/api/category', {
    category,
  });

  console.log('response data', response.data);
  return response.data;
};
