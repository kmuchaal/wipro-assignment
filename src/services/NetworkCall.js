const httpLink = 'https://picsum.photos'

//Here we can also make a check for internetcall and network timeout
export const getRequest = (reqObj) => {
  return fetch(httpLink + reqObj.url)
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((error) => {
      console.error(error);
      return error
    });
};

export const getImageRequest = (reqObj) => {
  return fetch(httpLink + reqObj.url)
    .then((response) => response)
    .then((json) => {
      return json
    })
    .catch((error) => {
      console.error(error);
      return error
    });
};
