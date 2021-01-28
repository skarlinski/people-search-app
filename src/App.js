import React, { useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import PeopleView from "./components/PeopleView";
import People from "./data-models/People";
import peopleData from './data/projectcontacts.json'

export const App = () => {
  const [query, setQuery] = useState("");
  const [people, setPeople] = useState(peopleData.map(
    (person) =>
      new People(
        person.profile_picture,
        person.first_name,
        person.last_name,
        person.id,
        person.phone_number
      )
  ));

  // useEffect(() => {
  //   const fetchPeople = async () => {
  //     const result = await axios("./projectcontacts.json");
  //     setPeople(
  //       result.data.map(
  //         (person) =>
  //           new People(
  //             person.profile_picture,
  //             person.first_name,
  //             person.last_name,
  //             person.id,
  //             person.phone_number
  //           )
  //       )
  //     );
  //   };
  //   fetchPeople();
  // }, [query]);



  const filterPeople = (q) => {
    console.log(q);
    setQuery(
      people.filter((person) => {
        const searchValue = `${person.first_name} ${person.last_name}`;
        if (!searchValue) {
          return false;
        }
        return searchValue.includes(q);
      })
    );
  };
  return (
    <div className="container">
      <SearchBar
        getQuery={(e) => filterPeople(e)}
      />
      {query? <PeopleView people={query} /> : <PeopleView people={people} />}

      {/* <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/SearchBar">
            <SearchBar />
          </Route>
        </Switch>
      </HashRouter> */}
    </div>
  );
};

export default App;
