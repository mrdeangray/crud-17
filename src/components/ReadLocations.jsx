import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Location from "./Location";
import { LocationContext } from "./context/LocationProvider";

const ReadLocations = () => {
  const { locations} = useContext(LocationContext);
  return (
    <div className="App">
      <div className="header">
        <h6>ReadLocations</h6>
      </div>
      <div className="left"></div>
      <div className="main">
        {locations?.map((loc) => {
          return <Location key={loc.id} location={loc} />;
        })}
        <Link to={`/create`}>
          <button>Create Location</button>
        </Link>
        <Link to={`/weather`}>
          <button>get Weather</button>
        </Link>
      </div>
      <div className="right"></div>
      <div className="footer"></div>
    </div>
  );
};

export default ReadLocations;
