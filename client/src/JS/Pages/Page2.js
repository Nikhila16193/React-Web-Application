//This is just being used for code pratice 

import React from 'react';
import ReactDOM from 'react-dom';
import ReadMoreReact from 'read-more-react';


// import MapView from "esri/views/MapView";


import { WebMapView } from ".././Components/WebMap";
import { MyFeatureLayer } from ".././Components/FeatureLayer";


const Page2 = (
    class Dragon extends React.Component {
        render() {
            return (
                // <div>
                //     <ReadMoreReact text={"Apple ndfjkgfjkfdbgjgjfdkgbjghjkfgjkfdghkfdghghfkghhjgf"}
                //         min={3}
                //         ideal={5}
                //         max={5}
                //         readMoreText="click here to read more" />
                // </div>
                <WebMapView />
                /* //<Maplatitude/> */

                // <MyFeatureLayer
                //     featureLayerProperties={{
                //         url:  'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Time_Zones/FeatureServer/0'
                //     }}
                // >
            );
        }
    }
);


export default Page2;