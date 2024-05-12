import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${location.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <div className="box">
      <span>{location.name}</span>
      <span>{score}</span>
      <Link to={`/update/${location.id}`}>Update</Link>
      <Link to={`/delete/${location.id}`}>Delete</Link>
    </div>
  );
};

export default Location;
