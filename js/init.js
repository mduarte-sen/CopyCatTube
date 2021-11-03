const VIDEOINFO = "../json/videos.json"

function getJSONData(url){
    var result;
    return fetch(url)
    .then(response => {return response.json()})
    .then(function(data){
        result = data;
        return result;
    })
    .catch(function(error){
        result = error;
        return result;
    });
}

