import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';


export const WebMapView = () => {
  const mapRef = useRef();

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer'], { css: true })
        .then(([ArcGISMap, MapView, MapSearch, FeatureLayer]) => {

          var custommap = new ArcGISMap({
            basemap: 'topo-vector',
            //featureLayer: "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/ArcGIS/rest/services/Lexington_County_Geodatabase_Test_20200313_WFL1/FeatureServer&source=sd",
            // portalItem: {
            //   id: "894a6dc1a03d4fd2947551d8ebf961f1",
            //   portal: "https://arcg.is/0Tj5yX"
            // }
          });

          const featureLayer = new FeatureLayer({
            //url : "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/arcgis/rest/services/geodatabase_design_test_20200324_lat_long/FeatureServer/1?token=y9tblv6BKX1lQ2SB2umgfmuPstUf0nVtj-KqVY0nSBn9hRjgoe3kpuBc3OArWid1jVyiXyJzMFKddsqUF1bGd3oW25jva9vXlUSq7kb0CpH3-r7j6p9A7qLyTgAQHSjZNVPeTGLI3SCUgKTd9QtIZDj6hPqmObY1GRpViNJsVimn1QlWTM2GndTo-yBfKBOKDc6gV1qwV894uHjND3Zk0TM9apCc67yhi8ZpMUgl-LI5eYsggwcDKGyVCSo0VT01M9TlWxDpvh8uSu4PF8s0kw" 
            url : "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/arcgis/rest/services/geodatabase_design_test_20200324_lat_long/FeatureServer"
            //url : "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/arcgis/rest/services/geodatabase_design_test_20200324_lat_long/FeatureServer"
            //url : "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/ArcGIS/rest/services/Lexington_County_Geodatabase_Test_20200313_WFL1/FeatureServer&source=sd"
            //url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
            //url : "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0" 
            // portalItem: {
            //   id: "894a6dc1a03d4fd2947551d8ebf961f1",
            //   portal: "https://www.arcgis.com" // Default: The ArcGIS Online Portal
            // }
          });
          custommap.add(featureLayer);

          debugger;
          // load the map view at the ref's DOM node
          var view = new MapView({
            container: "viewDiv",
            map: custommap,
            center: [ -81 , 34 ],
            //center: []
            zoom: 8
          });
          var search = new MapSearch({
            view: view
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

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
    }
  );

  return <div id="viewDiv" className="webmap" />;
};