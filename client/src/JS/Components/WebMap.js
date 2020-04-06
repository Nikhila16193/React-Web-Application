import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';
import { ScoreInputList } from ".././Components/MyLandScoreForm";
//const valueRef = React.useRef();

export const WebMapView = (props) => {
  const mapRef = useRef();
  // var address = '' ;
  const [maps, setMap] = useState([ ]);
  const [address, setAddress] = useState("");
  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/Graphic', 'esri/layers/GraphicsLayer'], { css: true })
        .then(([ArcGISMap, MapView, MapSearch, FeatureLayer, Graphic, GraphicsLayer]) => {
          var custommap = new ArcGISMap({
            basemap: 'topo-vector',
          });
          // maps.map = new ArcGISMap({
          //   basemap: 'topo-vector',
          // });
          //}
          const featureLayer = new FeatureLayer({
            url: "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/arcgis/rest/services/geodatabase_design_test_20200324_lat_long/FeatureServer"
          });
          custommap.add(featureLayer);
          var graphicsLayer = new GraphicsLayer();
          {maps.map(map => (custommap.add(map.graphicsLayer) ))} 
          // var point = { type: "point", longitude: -118.80657463861, latitude: 34.0005930608889 };
          // var simpleMarkerSymbol = { type: "simple-marker", color: [226, 119, 40] }; //, white width : 1 } ;, // orange outline: { color: [255, 255, 255], // white width: 1 } };
          // var pointGraphic = new Graphic({ geometry: point, symbol: simpleMarkerSymbol });
          // graphicsLayer.add(pointGraphic);
          //debugger;

          // load the map view at the ref's DOM node////////
          var view = new MapView({
            container: mapRef.current, //"viewDiv",
            map: custommap,
            center: [-81, 34],
            //center: []
            zoom: 8
          });
          var search = new MapSearch({
            view: view,
            sources: [],
            value: ''
          });
          // var CustomLayer = new FeatureLayer({
          //   //url: ""
          //   //url : ""
          //   url: ""
          // });
          view.ui.add(search, {
            position: "top-left",
            index: 4
          });

          var coordsWidget = document.createElement("div");
          coordsWidget.id = "coordsWidget";
          coordsWidget.className = "esri-widget esri-component";
          coordsWidget.style.padding = "7px 15px 5px";
          function showCoordinates(pt) {
            var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
              " | Scale 1:" + Math.round(view.scale * 1) / 1 +
              " | Zoom " + view.zoom;
            coordsWidget.innerHTML = coords;
          }
          view.watch("stationary", function (isStationary) {
            showCoordinates(view.center);
          });

          view.on("pointer-move", function (evt) {
            showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
          });

          view.ui.add(coordsWidget, "bottom-right");

          //debugger;
          function createGraphic(latitude, longitude) {
            // address = latitude + '/' + longitude;            
            var graphicsLayer = new GraphicsLayer();
            custommap.add(graphicsLayer);
            var point = { type: "point", longitude: longitude, latitude: latitude };
            var simpleMarkerSymbol = {
              type: "picture-marker",  //simple-marker // color: [226, 119, 40], //, white width : 1 } ;, // orange outline: { color: [255, 255, 255], // white width: 1 } };
              url: "http://localhost:3000/Pin_color.png",
              width: "32px",
              height: "32px"
            };
            var pointGraphic = new Graphic({ geometry: point, symbol: simpleMarkerSymbol });
            graphicsLayer.add(pointGraphic);
            setMap([
              ...maps,
              {
                graphicsLayer: graphicsLayer,
                address: "Lat : " + latitude + "Log : " + longitude
              }
            ]);
          }
          //debugger;

          view.on("double-click", function (event) {
            custommap.remove(graphicsLayer);
            createGraphic(event.mapPoint.latitude, event.mapPoint.longitude);
            search.sources.push({
              name: "Lat: " + event.mapPoint.latitude + "/ Lon:" + event.mapPoint.longitude,
              allPlaceHolder: event.mapPoint.latitude //; event.map.longitutude,
            });
            //debugger;
            document.getElementById("name").value = "Lon: " + event.mapPoint.longitude.toFixed(3) + " / Lat: " + event.mapPoint.latitude.toFixed(3);
            search.value = event.mapPoint.latitude;
            //latitude = event.mapPoint.latitude
            setAddress("Lon: " + event.mapPoint.longitude.toFixed(3) + " / Lat: " + event.mapPoint.latitude.toFixed(3));
            //mapRef.current.value);  
            
            // view.ui.add(search, {
            //   position: "top-left",
            //   index: 4
            // });
          });
          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
    }
  );
  // class MapLatitude extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       latitude: event.mapPoint.latitude
  //     };
  //     console.info(this.state.latitude);
  //   }
  // }
  //render() {
  return <div>
    <input type="text" id="name" name="name" style={{ width: 1000 }} />
    <div className="webmap" ref={mapRef} />
    {/* {maps.map(map => (
      <li key={map.address}>{maps.address}</li>
    ))} */}
    {/* <ScoreInputList /> */}
     <ScoreInputList address = {address} /> 

    {/* address = {document.getElementsByID("name").value()}/>  */}

  </div>
};


// class MapLatitude extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: latitude
//     };
//     console.info(this.state.latitude);
//   }
// }
//export default MapLatitude

/* <div>
    <div>
      <input type="text" id="name" name="name" style={{ width: 1000 }} />
      <div id="viewDiv" className="webmap" />
    </div>
  </div>
    <ScoreInputList property_address={event.mapPoint.Latitude} >
  </div> */