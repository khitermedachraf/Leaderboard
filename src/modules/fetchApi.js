/* eslint-disable no-plusplus */
import { scoresList } from './variables.js';

class FetchAPI {
  static async fetchData(id = 'Zl4d7IVkemOTTVg2fUdz') {
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      scoresList.classList.add('list');
      for (let index = 0; index < 199; index++) {
        const object = result.result[index];
        const li = document.createElement('li');
        li.textContent = `${object.user} : ${object.score}.`;
        scoresList.appendChild(li);
      }
      return result;
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(err);
      // Handle errors here
      return err;
    }
  }
}
export default FetchAPI;