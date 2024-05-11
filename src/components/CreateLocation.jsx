import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { LocationContext } from "./context/LocationProvider";

const Input = styled.input`
  border: 2px solid blue;
  border-radius: 10px;
`;

const CreateLocation = () => {
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
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>CreateLocation</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {locations.map((location) => {
        return <span key={location.id}>{location.name}, </span>;
      })}
    </div>
  );
};

export default CreateLocation;
