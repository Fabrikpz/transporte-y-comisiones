import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corrige icono por defecto de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function Map() {
    // Coordenadas aproximadas, ajustalas si querés:
    const deposits = [
        {
            position: [-31.942298102115004, -65.16448722264376], // Villa Dolores, Bº Docente
            name: "Depósito Principal - Villa Dolores",
            address: "Bº Docente, Manzana 78 Casa 2, X5870 Villa Dolores, Córdoba",
        },
        {
            position: [-31.412, -64.182], // Córdoba, Complejo Ucoma II
            name: "Nuevo Depósito - Córdoba",
            address: "Complejo Ucoma II, Av. Savio 6150 - Interfabrica",
        },
    ];

    // Center del mapa calculado promediando coordenadas (podés ajustar)
    const centerLat = (deposits[0].position[0] + deposits[1].position[0]) / 2;
    const centerLng = (deposits[0].position[1] + deposits[1].position[1]) / 2;
    const center = [centerLat, centerLng];

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={center} zoom={8} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {deposits.map(({ position, name, address }) => (
                    <Marker key={name} position={position}>
                        <Popup>
                            <strong>{name}</strong><br />
                            {address}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
