var api_key =
  'live_WX5zlLCZX7W236sBd35JaCOAqdDpb5SedzaV4i3EEWvt4YieCV68YfZsKU798HQZ';
var breedSelect = document.querySelector('select.breed-select');

function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'X-Auth-Token': api_key,
      'Content-Type': 'application/json',
    },
  })
    .then(resp => resp.json())
    .then(function (data) {
      for (let breed of data) {
        var option = document.createElement('option');
        option.value = breed.id;
        option.innerText = breed.name;
        breedSelect.append(option);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { fetchBreeds };
