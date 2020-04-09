import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';
import { ScoreInputList } from ".././Components/MyLandScoreForm";
//const valueRef = React.useRef();

export const WebMapView = (props) => {
  const mapRef = useRef();
  const [maps, setMap] = useState([]);
  const [address, setAddress] = useState("");
  useEffect(
    () => {

      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/Graphic', 'esri/layers/GraphicsLayer'], { css: true })
        .then(([ArcGISMap, MapView, MapSearch, FeatureLayer, Graphic, GraphicsLayer]) => {

          var custommap = new ArcGISMap({
            basemap: 'topo-vector',
          });

          const featureLayer = new FeatureLayer({
            url: "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/arcgis/rest/services/geodatabase_design_test_20200324_lat_long/FeatureServer"
          });
          custommap.add(featureLayer);

          var graphicsLayer = new GraphicsLayer();
          { maps.map(map => (custommap.add(map.graphicsLayer))) }


          // load the map view at the ref's DOM node//

          var view = new MapView({
            container: mapRef.current,
            map: custommap,
            center: [-81, 34],  // Change this to centre the map on USA // For now it will centre on Columbia, SC
            zoom: 8
          });

          var search = new MapSearch({
            view: view,
            sources: [],
            value: ''
          });


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
          
          //Methos to create graphic layer
          function createGraphic(latitude, longitude) {
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
          //Adding custom layer with Logo when user double clicks on a map location
          view.on("double-click", function (event) {
            custommap.remove(graphicsLayer);
            createGraphic(event.mapPoint.latitude, event.mapPoint.longitude);
            search.sources.push({
              name: "Lat: " + event.mapPoint.latitude + "/ Lon:" + event.mapPoint.longitude,
              allPlaceHolder: event.mapPoint.latitude //; event.map.longitutude,
            });

            //document.getElementById("name").value = "Lon: " + event.mapPoint.longitude.toFixed(3) + " / Lat: " + event.mapPoint.latitude.toFixed(3);

            search.value = event.mapPoint.latitude;
            setAddress("Lon: " + event.mapPoint.longitude.toFixed(3) + " / Lat: " + event.mapPoint.latitude.toFixed(3));
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

  return <div>
    {/* <input type="text" id="name" name="name" style={{ width: 1000 }} /> */}
    <div className="subHeaderDiv">
      <h2 className="subHeaderText"> myLandSCORE </h2>
    </div>
    <div className="sectionHeaderDiv">
      <h2 className="sectionHeaderText"> Search for an address </h2>
    </div>
    <div className="webmap" ref={mapRef} />
    <ScoreInputList address={address} />
  </div>
};


