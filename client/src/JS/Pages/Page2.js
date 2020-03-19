import React from 'react';
import ReactDOM from 'react-dom';
import ReadMoreReact from 'read-more-react';


// import MapView from "esri/views/MapView";


import { WebMapView } from ".././Components/WebMap";


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
            );
        }
    }
);


export default Page2;