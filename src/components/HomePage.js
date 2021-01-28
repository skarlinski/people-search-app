import React from "react";
import { Jumbotron, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div style={{ width: "600px", height: "600px", background: "gray" }}>
      <h3>HomePage</h3>
      <Button variant="outline-secondary" href="#/SearchBar">Woof!</Button>
    </div>
  );
};

export default HomePage;
