import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';


export const WebMapView = () => {
  const mapRef = useRef();

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer'], { css: true })
        .then(([ArcGISMap, MapView, MapSearch, FeatureLayer]) => {
          const custommap = new ArcGISMap({
            basemap: 'topo-vector',
            portalItem: {
              id: "974c6641665a42bf8a57da08e607bb6f",
              portal: "https://www.arcgis.com" 
            }
          });
          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: custommap,
            center: [-118, 34],
            zoom: 8
          });
          const search = new MapSearch({
            view: view 
          });
          view.ui.add(search, {   
            position: "top-left",
            index: 4
          });
          const CustomLayer = new FeatureLayer({
            //url: "https://services5.arcgis.com/XyvpsfYTYnTf8fE5/arcgis/rest/services/geodatabase_design_test_20200311/FeatureServer/0"
          });
          //custommap.add(CustomLayer);
          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
    }
  );

  return <div className="webmap" ref={mapRef} />;
};