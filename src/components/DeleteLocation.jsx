import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { LocationContext } from "./context/LocationProvider";

const Msg = styled.p`
  color: white;
  font-size: 30px;
`;

const DeleteLocation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUdating, setIsUpdating] = useState(false);
  const { locations, setLocations } = useContext(LocationContext);
  const [currLocation, setCurrLocation] = useState("");

  useEffect(() => {
    const location = locations.find((loc) => loc.id === id);
    setCurrLocation(location);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();

    const newLocations = locations.filter(loc=>loc.id !==id)
    setLocations(newLocations);
    localStorage.setItem("crud-17-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate("/");
    }, 2000);
  };


  return (
    <div className="App">
      <div className="header">
        <Link to={`/`}>Back</Link>
        <h6>Update: {currLocation.name}</h6>
      </div>
      <div className="left"></div>
      <div className="main">
        <button onClick={handleDelete}>Delete {currLocation.name}</button>
      </div>
      <div className="right">
        {locations.map((location) => {
          return <span key={location.id}>{location.name}, </span>;
        })}
      </div>
      <div className="footer">{isUdating && <Msg>Deleting...</Msg>}</div>
    </div>
  );
};

export default DeleteLocation;
