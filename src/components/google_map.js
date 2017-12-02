import React from "react";

class GoogleMap extends React.Component {
    componentDidMount() {
        // creates new map and finds the element and
        // adds elements inside
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }


    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;