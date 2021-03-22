import Map from "./components/Map";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      // const res = await fetch(
      //   "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      // );
      // await res.json().then(function (res) {
      //   setEventData(res);
      //   setLoading(false);
      // });
    };
    fetchEvents();
    setLoading(false);
    console.log("data received: \n");
    console.log(eventData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      <h1>{!loading ? <Map eventData={eventData} /> : <Loader />}</h1>
      {/* <h1>{!loading ? <p>data loaded</p> : <Loader />}</h1> */}
    </div>
  );
}

export default App;
