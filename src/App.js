//import logo from './logo.svg';
import React from "react";
import Card from "../src/cards/Card";
import "./App.css";

function App() {
  const ClassRoomArray = [
    {
      frontSide: "Welcome Thanmayeee,Thank you so much ",
      backSide: "Shritha",
    },
    {
      frontSide: "Hiii  Codder Shraddha , Just want to try",
      backSide: " Hi Shraddha,How are u welcome to programming ",
    },
    {
      frontSide: "Shraddha",
      backSide: " Let me help u ,Please give me a chance",
    },
    {
      frontSide: "Pappa",
      backSide: " I dont need any help , I am top codder",
    },
    {
      frontSide: "Thanu",
      backSide: "Who are u, what the hell and heaven ,#Jaiii naveen poli",
    },
    {
      frontSide: "Shritha",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: " I dont need any help , I am top codder",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: " I dont need any help , I am top codder",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: "Hello every one ",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: "Hello every one ",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: "Thanu",
      backSide: "Who are u, what the hell and heaven ,#Jaiii naveen poli",
    },
    {
      frontSide: "Shritha",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: " I dont need any help , I am top codder",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: " I dont need any help , I am top codder",
      backSide: " Pedda pichi pilla",
    },
    {
      frontSide: "Hello every one ",
      backSide: " Pedda pichi pilla",
    },
  ];
  return (
    <div className="App">
      {ClassRoomArray.map((std, i) => {
        return (
          <Card key={i} frontSide={std.frontSide} backSide={std.backSide} />
        );
      })}
    </div>
  );
}

export default App;
