var videoList = {
    "siberian tiger": "https://www.videvo.net/videvo_files/converted/2015_08/preview/Tiger.mp460597.webm",
    "Rain fire": "https://www.videvo.net/videvo_files/converted/2014_08/preview/Rain_Fire.mov57604.webm"
}

var videoList2Show = Object.keys(videoList);

videoList2Show.forEach(e => {
    // use tabindex="0" to make focus
    $("#root").append(
        '<li class="move" tabindex="0">' + e + '</li>'
    )
});


function checkExistingVideo() {
    let hasVideo = document.querySelector('video');
    if (hasVideo) {
        hasVideo.remove();
        console.log("video already exist removing now");
    }
    return true;
}

function videoNameclick(elem) {
    let videoName = elem.innerHTML;
    let videoSrc = videoList[videoName];
    checkExistingVideo();
    $(".placeVideo").append('<h4 id="loaderText">Loading video...</h4><video src="' + videoSrc + '" autoplay></video>');
    document.querySelector("video").addEventListener('loadeddata', function() {
        loaderText.remove();
    }, false);
}

/* Handle keydown events */
window.addEventListener("keydown", keyNavigation);

function keyNavigation(e) {
    if (e.key == "ArrowDown") {
        $(".move:focus").next().focus();
    }
    if (e.key == "ArrowUp") {
        $(".move:focus").prev().focus();
    }
    if (!$(':focus').length) {
        // console.log("No focus set, now focusing back")
        $(".move")[0].focus();
    }
    if ((e.key == "Enter") && $(':focus').length) {
        videoNameclick($(':focus')[0]);
    }
    if (e.key == "SoftRight") {
        alert("Nothing assigned to " + e.key);
    }
    if (e.key == "SoftLeft") {
        alert("Nothing assigned to " + e.key);
    }
    if (e.key == "Backspace") {
        // Handle if you want to go to previous menu or to exit directly;
        e.preventDefault(); // to prevent app from exiting
        let exit = confirm("Are your sure want to exit");
        if (exit) {
            window.close();
        }
    }
}

// After document ready do auto focus on first element
$(document).ready(function() {
    $(".move")[0].focus();
});