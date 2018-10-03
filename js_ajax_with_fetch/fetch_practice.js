// by default `fetch` will make a `GET` request
// fetch will return a promise
// if you return `response.json()` you will by returning
// another promise
fetch('/messages')
.then( (response) => { return response.json() })
.then( (json) => { console.log(json) });