import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import InfiniteScroll from "react-infinite-scroll-component";

const PeopleView = ({ people }) => {
  // const [hasMore, setHasMore] = useState(true);
  // const [items, setItems] = useState(Array.from({ length: 20 }));
  const firstPage = people.slice(0,20);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(firstPage);

  const fetchMoreData = () => {
    const pagePeople = people.slice(0, (page + 1) * 20)
      setPage((page) => page + 1)
      
      setItems(pagePeople);
  };

  // https://github.com/ankeetmaini/react-infinite-scroll-component#readme
  // pagination

  return (



    <InfiniteScroll
      dataLength={items.length}
      next={() => fetchMoreData()}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
    <section className="cards">
    {items.map((person) => 
    {
      console.log(person)
     return (
      
      <PeopleCard key={person.id} person={person} />
    )})}
  </section>
    </InfiniteScroll>
  );
};

export default PeopleView;
