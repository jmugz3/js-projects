
function get(url) {
  return fetch(url, {
    method: 'get',
  });
}

get('https://google.com')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
