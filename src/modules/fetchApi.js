/* eslint-disable no-plusplus */
import { scoresList } from './variables.js';

class FetchAPI {
  static async fetchData() {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I5zbUnax7uOS1kQCeVNl/scores/');
      const result = await response.json();
      scoresList.innerHTML = '';
      scoresList.classList.add('list');
      for (let index = 0; index < result.result.length; index++) {
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

  static async postData(name, score) {
    const object = {
      user: name,
      score,
    };
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I5zbUnax7uOS1kQCeVNl/scores/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  }
}
export default FetchAPI;