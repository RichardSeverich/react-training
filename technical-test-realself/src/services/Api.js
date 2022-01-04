import axios from 'axios';

const getData = (callback) => {
  axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      callback(response.data.results);
    })
    .catch(error => {
      console.log(error);
      callback(error);
    })
};

const Api = {
  getData
}

export default Api;
