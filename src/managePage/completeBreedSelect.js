import { fetchBreeds } from '../cat-api';
import { hideComponent, showComponent } from './toggleComponents';
var breedSelect = document.querySelector('select.breed-select');
var error = document.querySelector('p.error');
var loader = document.querySelector('span.loader');

hideComponent(breedSelect);
hideComponent(error);

export function completeBreedSelect() {
  hideComponent(loader);
  showComponent(breedSelect);
  fetchBreeds();
}
