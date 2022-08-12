import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet"

var IconLocation = L.icon({
    iconUrl: 'src/components/Map/icon-location.svg',
    iconSize: [46, 56],
});

const MapComponent = ({ location }) => {

    const map = useMap();
    const position = [51.505, -0.09]

    useEffect(() => {
        map.flyTo([20, 20], 13);
    }, [location])

    return (
        <Marker position={position} icon={IconLocation} />
    )
}

export default MapComponent