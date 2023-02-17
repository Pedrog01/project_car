import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import connection from "../../Components/Api/connection";

const Car = () => {
  const [ truck, setTruck] = useState({})

  const [searchParams, setSearchParams] = useSearchParams();

  const cars = searchParams.get("/cars");

  useEffect(() => {
    axios
    .get('http://localhost:3333')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="form">
      <h1>ads</h1>
  );
};

export default Car;
