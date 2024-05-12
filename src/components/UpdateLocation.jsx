import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import { LocationContext } from "./context/LocationProvider";

const Input = styled.input`
  border: 2px solid blue;
  border-radius: 10px;
`;

const Msg = styled.p`
  color: white;
  font-size: 30px;
`;

const UpdateLocation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUdating, setIsUpdating] = useState(false);
  const { locations, setLocations } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState("");
  const [currLocation, setCurrLocation] = useState("");

  useEffect(() => {
    const location = locations.find((loc) => loc.id === id);
    setCurrLocation(location);
    setInputValue(location.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLocations = locations.map((loc) => {
      if (loc.id === id) {
        loc.name = inputValue;
      }
      return loc;
    });
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud-17-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate("/");
    }, 2000);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <Link to={`/`}>Back</Link>
        <h6>Update: {currLocation.name}</h6>
      </div>
      <div className="left"></div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input value={inputValue} onChange={handleChange} autoFocus />
        </form>
      </div>
      <div className="right">
        {locations.map((location) => {
          return <span key={location.id}>{location.name}, </span>;
        })}
      </div>
      <div className="footer">{isUdating && <Msg>Updating...</Msg>}</div>
    </div>
  );
};
export default UpdateLocation;
