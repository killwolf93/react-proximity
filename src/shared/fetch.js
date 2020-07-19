const baseUrl = process.env.REACT_APP_BASE_URL || 'https://jsonplaceholder.typicode.com/'

export const sendRequest = (url) => {
  return fetch(baseUrl + url)
      .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
            throw new Error(error.message);
          })
      .then(response => response.json());
}