import React, { useState } from "react";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  const [score, setScore] = useState(0);
  return (
    <div>
      <span>{location.name}</span>
      <span>{score}</span>
      <Link to={`/update/${location.id}`}>Update</Link>
      <Link to={`/delete/${location.id}`}>Delete</Link>
    </div>
  );
};

export default Location;
