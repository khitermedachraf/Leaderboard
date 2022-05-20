import './style.css';
import {
  refreshBtn, submithBtn, name, score,
} from './modules/variables.js';
import FetchAPI from './modules/fetchApi.js';

FetchAPI.fetchData();

refreshBtn.addEventListener('click', () => {
});

submithBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('submit');
});