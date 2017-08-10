import React from 'react'

const Destination = (props) => {
  return (
    <li onClick={props.crossOff} className="" id={props.name}>
      {props.name}
    </li>
  )
};

export default Destination;
