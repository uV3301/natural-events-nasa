import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";
import LavaIcon from "@iconify/icons-mdi/alert";
import StormIcon from "@iconify/icons-mdi/weather-hurricane";

const LocationMarker = ({ lat, lng, id, onClick }) => {
  if (id === 8) {
    return (
      <div className="location-marker" onClick={onClick}>
        <Icon icon={FireIcon} className="fire-icon" />
      </div>
    );
  } else if (id === 12) {
    return (
      <div className="location-marker" onClick={onClick}>
        <Icon icon={LavaIcon} className="lava-icon" />
      </div>
    );
  } else {
    return (
      <div className="location-marker" onClick={onClick}>
        <Icon icon={StormIcon} className="storm-icon" />
      </div>
    );
  }
};

export default LocationMarker;
