import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import MapComponent from './components/MapComponent';
import './styles.scss';

const className = 'map-container';

const Map = ({ location }) => {

    const position = [51.505, -0.09]

    return (
        <MapContainer className={className} center={position} zoom={13}>
            <MapComponent location={location} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map