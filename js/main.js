var mymap = L.map('mapid').setView([25.860240, -80.554123], 7.02);

L.tileLayer('https://api.mapbox.com/styles/v1/adamjturner/ck2xgqtcf2l301ct1geacrt24/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRhbWp0dXJuZXIiLCJhIjoiY2syd3VuZGVrMDRxazNscnYwN3Vib3VyZCJ9.-E2a10G5hIqaUHtpA-DgaQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var mia = L.marker([25.790892, -80.283527]).addTo(mymap);
var ftl = L.marker([26.070397, -80.141021]).addTo(mymap);
var pbi = L.marker([26.684063, -80.089037]).addTo(mymap);
var kwi = L.marker([24.553436, -81.754883]).addTo(mymap);
var mki = L.marker([24.724802, -81.051974]).addTo(mymap);


mia.bindPopup("<b>Miami International Airport (MIA)</b><br>2100 NW 42nd Ave, Miami, FL 33126");
ftl.bindPopup("<b>Fort Lauderdale-Hollywood International Airport (FLL)</b><br>100 Terminal Dr, Fort Lauderdale, FL 33315");
pbi.bindPopup("<b>Palm Beach International Airport (PBI)</b><br>1000 James L Turnage Blvd, West Palm Beach, FL 33415");
kwi.bindPopup("<b>Key West International Airport (EYW)</b><br>3491 S Roosevelt Blvd, Key West, FL 33040");
mki.bindPopup("<b>Florida Keys/Marathon International Airport (MTH)</b><br>9000 Overseas Hwy, Marathon, FL 33050");

for (let i = 0; i < places.length; i++  ) {
  L.marker( [places[i].latitude, places[i].longitude] ).bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>'+ places[i].descrip + '</p>')
  .addTo(mymap);
};
