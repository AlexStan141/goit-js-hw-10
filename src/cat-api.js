import { getResponse } from './asyncManager';
var api_key =
  'live_WX5zlLCZX7W236sBd35JaCOAqdDpb5SedzaV4i3EEWvt4YieCV68YfZsKU798HQZ';

function fetchBreeds() {
  return getResponse('https://api.thecatapi.com/v1/breeds', api_key);
}

function fetchCatByBreed(breedId) {
  return getResponse(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    api_key
  );
}

async function findCat(breedId) {
  return fetchBreeds()
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      for (let breed of data) {
        if (breed.id == breedId) {
          return breed;
        }
      }
      return null;
    });
}

export { fetchBreeds, fetchCatByBreed, findCat };
