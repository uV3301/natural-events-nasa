const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event location info</h2>
      <ul>
        <li>
          <strong>{info.title}</strong>
        </li>
        <li>
          Source: <em>{info.source}</em>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
