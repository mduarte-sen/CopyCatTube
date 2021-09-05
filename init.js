const VIDEOINFO = "../json/videos.json"
// var mydata = JSON.parse(videos);
// console.log(JSON.stringify(mydata));

function getJSONData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

getJSONData(VIDEOINFO);

function insertVideos(){
    let insertHtml = `
    <div class="video-selector">
        <a href="">
            <img src="" alt="">
            <h6></h6>
            <p class="selector-details"></p>
            <p class="selector-details"></p>
        </a>
    </div>`

}