export default {
    getRequest
}

function getRequest(location, callback){
    console.log(location);
    fetch(location)
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(err => console.log(err));
}