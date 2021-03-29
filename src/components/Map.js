import GoogleMapReact from "google-map-react";
import LocationMarker from "./locationMarker";
import LocationInfoBox from "./locationInfo";
import { useState } from "react";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    const coordsLen = ev.geometries[0].coordinates.length;
    if (coordsLen === 2) {
      if (ev.categories[0].id === 8) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            id={ev.categories[0].id}
            onClick={() =>
              setLocationInfo({ title: ev.title, source: ev.sources[0].url, latitude: ev.geometries[0].coordinates[1], longitude: ev.geometries[0].coordinates[0], id: ev.categories[0].id})
            }
          />
        );
      } else if (ev.categories[0].id === 12) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            id={ev.categories[0].id}
            onClick={() =>
              setLocationInfo({ title: ev.title, source: ev.sources[0].url, latitude: ev.geometries[0].coordinates[1], longitude: ev.geometries[0].coordinates[0], id: ev.categories[0].id})
            }
          />
        );
      } else if (ev.categories[0].id === 10) {
        const temp = ev.geometries.map((v) => {
          return (
            <LocationMarker
              lat={v.coordinates[1]}
              lng={v.coordinates[0]}
              id={ev.categories[0].id}
              onClick={() =>
                setLocationInfo({ title: ev.title, source: ev.sources[0].url, latitude: ev.geometries[0].coordinates[1], longitude: ev.geometries[0].coordinates[0], id: ev.categories[0].id})
              }
            />
          );
        });
        return temp;
      } else if (ev.categories[0].id === 15) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            id={ev.categories[0].id}
            onClick={() =>
              setLocationInfo({ title: ev.title, source: ev.sources[0].url, latitude: ev.geometries[0].coordinates[1], longitude: ev.geometries[0].coordinates[0], id: ev.categories[0].id})
            }
          />
        );
      }
    }

    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        onClick={() => setLocationInfo(null)}
        bootstrapURLKeys={{ key: "AIzaSyCUbwWGRKjzOeWlHp38bcahDmDADE0nlAk" }}
        defaultZoom={zoom}
        defaultCenter={center}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 25.3544022,
    lng: 83.0165122,
  },
  zoom: 5,
};

export default Map;
