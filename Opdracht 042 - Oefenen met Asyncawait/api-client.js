const API_KEY = "c3e50987a180a35d4d8dde71d9a68478";

// getData
async function getData(url) {
  const response = await fetch(url)
    .then((answer) => answer.json())
    .catch((err) => console.log(err));
  return response;
}
