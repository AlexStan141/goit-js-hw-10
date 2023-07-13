import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_WX5zlLCZX7W236sBd35JaCOAqdDpb5SedzaV4i3EEWvt4YieCV68YfZsKU798HQZ';

function fetchBreeds() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}function fetchCatByBreed(breedId) {
  console.log(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export { fetchBreeds, fetchCatByBreed };
