// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString; // can remove safely
    console.log("Show response "+response);
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    console.log("On client Load ");
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    
    gapi.client.setApiKey('AIzaSyAIorEJxO3GGHDQt_LZTv142xiVWlMqs-E');
    console.log("You tube api laod ");
}

function verifyorder(){

  console.log("verify order is "+order);


    var order = document.getElementById('value').value;
    console.log(order);

    var request = gapi.client.youtube.search.list({
        part: 'snippet', 
        channelId: 'UCCqEeDAUf4Mg0GgEN658tkA' ,  // stuckman
        q: order ,
        maxResults: 5
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);

   console.log("request.execute + order "+order);

}



// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) { // stuckman

    console.log("on search response +response "+response);
    showResponse(response);

    
    var vnumber = response.pageInfo.totalResults;

    console.log("vnumber"+vnumber);

    if(vnumber > 0){

    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    vid = response.items[0].id.videoId;
    vid2 = response.items[1].id.videoId;
   
    var count = Object.keys(response.items).length;

    // console.log(Object.keys(response)); // how meny results ?

    console.log("stuckman results "+count); // this is a count of the keys not the number of results

    console.log("stuckman vid1: "+vid);

    console.log("stuckman vid2: "+vid2);

    console.log("stuckman response items: "+response.items[0].id.videoId);

    console.log("stuckman response totalresults count: "+response.pageInfo.totalResults);

    

    player = new YT.Player('ytplayer', {
      height: '390',
      width: '640'
    });

    document.getElementById("ytplayer").src = "https://www.youtube.com/embed/"+vid;

  

    player = new YT.Player('ytplayer2', {
      height: '390',
      width: '640'
    });
  
    document.getElementById("ytplayer2").src = "https://www.youtube.com/embed/"+vid2;
  }
  else{
    console.log("no results");

    
  }
    
}

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;



function reload(){
  console.log(player);
  document.getElementById("ytplayer").src = "https://www.youtube.com/embed/"+vid2;
}
