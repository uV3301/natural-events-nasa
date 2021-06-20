// import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import CustomModal from "./popUp";

const LocationInfo = ({ info }) => {
  var url =
    "https://www.google.com/maps?z=12&t=m&q=" +
    String(info.latitude) +
    "%20," +
    String(info.longitude);
  return (
    <div className="location-info">
      <h2>Event location info</h2>
      <ul>
        <li>
          <strong>{info.title}</strong>
        </li>
        <li>
          <a href={info.source}>Source Link</a>
        </li>
        <li>
          <a className="anchors" href={url}>
            Open on Google Maps
          </a>
        </li>
        <li>
          <CustomModal id={info.id} />

          {/* <Popup trigger={<button> Read More </button>} position="right center">
          <div> 
            {info.id === 12 && <div>
              <img src="https://images.newscientist.com/wp-content/uploads/2020/12/21145328/volcanoes-f0r7pt_web.jpg" alt="volcano-img" width="200" height="200"/>
              <p>A volcano is a rupture in the crust of a planetary-mass object, 
              such as Earth, that allows hot lava, volcanic ash, 
              and gases to escape... 
              <a href="https://en.wikipedia.org/wiki/Volcano#:~:text=A%20volcano%20is%20a%20rupture,and%20most%20are%20found%20underwater.">read more</a></p>
            </div>}
          </div>
          </Popup> */}
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
