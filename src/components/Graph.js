import React from 'react'
import graphview from "./images/graph.jpg";
import "./Graph.css";
import Header from './Header';


function Graph() {
  return (
    <div className = "graph">
        <Header /> 
        <img src = {graphview} alt = "" />
    </div>
  )
}

export default Graph
