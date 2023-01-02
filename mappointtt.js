const show = document.getElementById('showButton')

var mapId =document.getElementById('issMap')
function fullScreenView(){
mapId.requestFullscreen()
}
var map=undefined

// document.getElementById('issMap').innerHTML=''

function initializeMap(){
    map = new L.map('issMap',{
      worldCopyJump:true,
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView([0,0],2);
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const tiles = L.tileLayer(
        tileUrl,
        {
            attribution
        }
    );

    tiles.addTo(map);
}



function showOn(e){

  console.log(e);

  if(map == undefined)
  {
    initializeMap();
  }
  

var issIcon = L.icon({
    iconUrl: 'issimg.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
  });



// Add circle overlay and bind to marker


// var circle = L.circle(
//   [lat,lon],
//   {
//     radius: radius,
//     fillColor: color
//   }
  
//   );
//   circle.addTo(map)

 


// circle.bindTo('center', marker, 'position');



    // var radiusCircle = L.circle(LatLng(50.73623,114.36232), { radius: radius, color: sat_colors[k], weight: 2 });
    // //fp_layer.setRadius();
    // radiusCircle.addTo(map)


// const api_url ='https://api.wheretheiss.at/v1/satellites/25544'



async function getISS(){
 
     latitude = document.querySelector(".lats").value;
     longitude = document.querySelector(".longs").value;

    var lat = document.getElementById('lat');
    // lat.innerHTML = latitude
    var long = document.getElementById('lon');
    // long.innerHTML = longitude

    let radius = document.getElementById("r").value
    // console.log(radius)
    let color = document.getElementById("color").value

    // console.log(e.offSetParent,"onShow?event");

    let locationClass = document.querySelectorAll(".location-show");

   
    locationClass.forEach((show) => {
      show.addEventListener('click', function () {
        let row = this.parentElement.parentElement;
        let currentlat = row.getElementsByTagName("td")[1].innerHTML
        let currentlong = row.getElementsByTagName("td")[2].innerHTML

        lat.innerHTML=currentlat
        long.innerHTML=currentlong


        // let curradius = document.getElementById("r")
        // let curcolor = document.getElementById("color")
        
        // radius.innerHTML=curradius
        // color.innerHTML = curcolor


        var circle = L.circle(
          [currentlat,currentlong],

          {
            radius: radius,
            fillColor: color
          }
          
          );

          circle.addTo(map)

        const marker = L.marker ([currentlat,currentlong],{icon:issIcon},{circle:circle} ).addTo(map)

      }
 ) 

    });
}

getISS()

}

function requestFullScreen() {
  let mp = document.querySelector("#issMap");
  if(map != undefined)
  {
    mp.requestFullScreen();
  }
}
