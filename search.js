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
  request.execute(onSearchResponsestucky);
  console.log("request.execute + order stuckman "+order);


  var request = gapi.client.youtube.search.list({
    part: 'snippet', 
    channelId: 'UCsgv2QHkT2ljEixyulzOnUQ' ,  // JOE
    q: order ,
    maxResults: 5
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseJoe);
  console.log("request.execute + order stuckman "+order);



}

// Called automatically with the response of the YouTube API request.
function onSearchResponsestucky(response) { // stuckman

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  var capnum = 5;   // a cap on results delt with

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum)
    }

    var pnumber = 2;
    console.log("total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("stuckytitle").innerHTML = "<h2>Stuckman results</h2>"  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
        //Make the up to five vids        
        vid = response.items[vindex].id.videoId;  

        player = new YT.Player('stuckytplayer'+vnumber, {
          height: '390',
          width: '640'
        });

        document.getElementById("stuckytplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
        //incement down the vnumber
        vnumber --;
      }

      while(vnumber > 0); // the cap number is more then none    
    }

  else{

    console.log("no results");
    document.getElementById("stuckytitle").innerHTML = "<h2>No results</h2>"   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseJoe(response) { // stuckman

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  var capnum = 5;   // a cap on results delt with

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum)
    }

    var pnumber = 2;
    console.log("total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("joeytitle").innerHTML = "<h2>Joe results</h2>"  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
        //Make the up to five vids        
        vid = response.items[vindex].id.videoId;  

        player = new YT.Player('joeytplayer'+vnumber, {
          height: '390',
          width: '640'
        });

        document.getElementById("joeytplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
        //incement down the vnumber
        vnumber --;
      }

      while(vnumber > 0); // the cap number is more then none    
    }

  else{

    console.log("no results");
    document.getElementById("joeytitle").innerHTML = "<h2>No results</h2>"   
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


