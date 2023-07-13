import { fetchBreeds } from '../cat-api';
import { completeCatInfo } from './completeCatInfo';
import { hideComponent, showComponent } from './toggleComponents';
var breedSelect = document.querySelector('select.breed-select');
var error = document.querySelector('p.error');
var loader = document.querySelector('span.loader');

hideComponent(breedSelect);
hideComponent(error);

export function completeBreedSelect() {
  fetchBreeds()
    .then(response => {
      if (response.status != 200) {
        throw new Error(error.innerText);
      }
      return response.data;
    })
    .then(data => {
      data.forEach(element => {
        var breedOption = document.createElement('option');
        breedOption.value = element.id;
        breedOption.innerText = element.name;
        breedOption.addEventListener('click', () => {
          completeCatInfo(element.id);
        });
        breedSelect.append(breedOption);
      });
      showComponent(breedSelect);
      breedSelect.style.top = '0px';
      breedSelect.style.left = '0px';
      hideComponent(loader);
    })
    .catch(error2 => {
      showComponent(error);
      hideComponent(loader);
    });
}
