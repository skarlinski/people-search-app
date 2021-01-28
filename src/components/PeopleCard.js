import React, { useEffect, useState } from "react";


const PeopleCard = ({ person }) => {

  return (


      <div className="card">
        <img src={person.profile_picture} alt="" />
        <h1>Fashion Industry</h1>
        <ul>
          <li>
            <strong>Firstname:</strong> {person.first_name}
          </li>
          <li>
            <strong>Lastname:</strong> {person.last_name}
          </li>
          <li>
            <strong>Phone Number:</strong> {person.phone_number}
          </li>
        </ul>
      </div>
  );
};

export default PeopleCard;
