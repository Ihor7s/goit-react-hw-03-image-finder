import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;
axios.defaults.params = {
  key: '36297039-f17e9dcfd60e870b302226aff',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}`);
  return response.data;
};

const api = {
  getImages,
};

export default api;
