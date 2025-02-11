import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./App.css";

function App(props) {
  const [dogImg, setDogImg] = useState(null);

  const fetchDoggo = () => {
    setDogImg("");
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (dogImg === null) {
      fetchDoggo();
    }
  });

  return (
    <div>
      <header>
        <h3>Doggo of the day</h3>
        <div>
          {/* <button onClick={() => fetchDoggo()}>New Doggo</button> */}
          <Alert severity="success">This is a success alert — {props.name}</Alert>
          <Button onClick={() => fetchDoggo()} variant="contained">New Doggo</Button>
        </div>
        {dogImg !== "" ? (
          <div>
            <img src={dogImg} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;
