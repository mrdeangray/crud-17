import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Location from "./Location";
import { LocationContext } from "./context/LocationProvider";

const ReadLocations = () => {
  const { locations, setLocations } = useContext(LocationContext);
  return (
    <div>
      <h6>ReadLocations</h6>
      <Link to={`/create`}>
        <button>Create Location</button>
      </Link>
      {locations?.map((loc) => {
        return <Location key={loc.id} location={loc} />;
      })}
    </div>
  );
};

export default ReadLocations;
