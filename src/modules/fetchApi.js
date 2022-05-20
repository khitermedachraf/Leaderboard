/* eslint-disable no-plusplus */
import { scoresList } from './variables.js';

class FetchAPI {
  static async fetchData() {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I5zbUnax7uOS1kQCeVNl/scores/');
      const result = await response.json();
      scoresList.innerHTML = '';
      scoresList.classList.add('list');
      const resultArray = result.result;
      resultArray.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      for (let index = 0; index < resultArray.length; index++) {
        const object = resultArray[index];
        const li = document.createElement('li');
        li.textContent = ` ${index + 1} -| ${object.user} : ${object.score}.`;
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