const url = "http://localhost:3000/agentsaudit";

function getLlamadas() {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getLlamadas
};
