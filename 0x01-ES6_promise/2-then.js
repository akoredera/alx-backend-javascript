/* eslint-disable */
export default function ghandleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API')); 

}
