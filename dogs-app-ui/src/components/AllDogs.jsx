import React from 'react'
import Row from 'react-bootstrap/Row'
import {useState } from "react";
import DogsDetails from './DogsDetails';

const AllDogs  = (props) => {
    
const dogs = [
    { "id": 1, "name":"Rex"},
    { "id": 2, "name":"T-Rex"},
    { "id": 3, "name": "Puffy" },
    { "id": 4, "name":"Spark"},
    { "id": 5, "name":"Azorel"},
    { "id": 6, "name": "Sandy" },
    { "id": 7, "name":"Muick"},
    { "id": 8, "name":"Edgar"},
    { "id": 9, "name": "Maya" }
  ]
  const [total, setTotal] = useState(0);

  const totalCountHandler = (name) => {
    console.log(name)
    setTotal(total + 1);
  }
  return (
    <>
      <Row >
        {dogs.map(dog => (
          <div className='container' key={dog.id.toString()}>
            <DogsDetails info={dog} parentCount={totalCountHandler} />
          </div>
        ))}
      </Row>
    </>
  )
}

export default AllDogs