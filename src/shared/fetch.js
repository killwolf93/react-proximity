const baseUrl = process.env.REACT_APP_BASE_URL || 'https://jsonplaceholder.typicode.com/'

export const sendRequest = (url) => {
  return fetch(baseUrl + url)
      .then(response => {
            console.log(url)
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
            var errorMessage = new Error(error.message);
            throw errorMessage;
          })
      .then(response => response.json());
}