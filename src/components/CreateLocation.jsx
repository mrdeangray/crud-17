import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { LocationContext } from "./context/LocationProvider";

const Input = styled.input`
  border: 2px solid blue;
  border-radius: 10px;
`;

const Msg = styled.p`
  color: white;
  font-size: 30px;
`;

const CreateLocation = () => {
  const navigate = useNavigate();
  const [isUdating, setIsUpdating] = useState(false);
  const { locations, setLocations } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLocation = {};
    newLocation.id = uuid();
    newLocation.score = 0;
    newLocation.name = inputValue;
    const newLocations = [...locations, newLocation];
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
        <h6>CreateLocation</h6>
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
      <div className="footer">
        {isUdating && <Msg>Creating...</Msg>}
      </div>
    </div>
  );
};

export default CreateLocation;
