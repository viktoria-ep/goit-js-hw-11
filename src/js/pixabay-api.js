import axios from 'axios';

const API_KEY = '52337291-0776378263373b49cfa64027e'; // мій ключ
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 50,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.log('Error fetching data from Pixabay:', error);
      throw error;
    });
}
