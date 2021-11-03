let videoData;

function insertVideos(){
    let insertHtml = ``

    for(let i = 0; i < videoData.length; i++){
        let video = videoData[i];
        insertHtml += `
        <div class="video-selector">
            <a href="#">
                <div class="thumbnail" id="thumbnail`+i+`"><img src="img/sub-buzz.jpg"></div>
                <h3>`+ video.title +`</h6>
                <p class="selector-details">`+ video.channel +`</p>
                <p class="selector-details">`+ video.views +` views</p>
            </a>
        </div>` 
    }
    document.getElementById("start-recommended").innerHTML = insertHtml;
    // for(let j = 0; j < videoData.length; j++){
    //     let data = videoData[j];
    //     let videoContainer = document.getElementById('video-container');
    //     let video = document.createElement('video');
    //     video.src = data.path;
    //     video.id = "video"+j;
    //     video.hidden = true;
    //     // video.width = 320;
    //     // video.height = 240;
    //     videoContainer.appendChild(video);
    //     video.onloadeddata = function(){
    //     createThumbnail(j);
    //     let nested = document.getElementById("video"+j);
    //     // setTimeout(function(){document.getElementById('video-container').removeChild(nested);},5000);
    //     }
        
    // } 
    // setTimeout(function(){document.getElementById('video-container').innerHTML = '';},2000);
}

function createThumbnail(n){
    let video = document.getElementById('video'+n);
    let thumbnail = document.getElementById('thumbnail'+n);
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 240;
    ctx.drawImage(video, 0, 0, 300, 500);
    thumbnail.appendChild(canvas);
}

$(document).ready(
  getJSONData(VIDEOINFO).then(
    function(result){
        videoData = result;
        insertVideos();
        // createThumbnail();
    }
  )
);