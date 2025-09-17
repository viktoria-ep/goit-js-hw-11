import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector("input[name='search-text']");

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = input.value.trim();

  form.reset();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#ff7fa0',
      messageColor: '#2e2f42',
      width: 280,
      timeout: 4000,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ff7fa0',
          messageColor: '#2e2f42',
          width: 280,
          timeout: 4000,
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again later!',
        position: 'topRight',
        backgroundColor: '#ff7fa0',
        titleColor: '#2e2f42',
        messageColor: '#2e2f42',
        width: 280,
        timeout: 4000,
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
