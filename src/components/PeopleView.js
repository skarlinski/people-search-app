import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import InfiniteScroll from "react-infinite-scroll-component";

const PeopleView = ({ people }) => {
  // const [hasMore, setHasMore] = useState(true);
  // const [items, setItems] = useState(Array.from({ length: 20 }));
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(people.slice(0,  20));

  const fetchMoreData = () => {
    // setTimeout(() => {
      setPage((page) => page + 1)
      // debugger
      setItems(people.slice(0, page * 20));
    // }, 500);
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
        {items.map((person) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </section>
    </InfiniteScroll>
  );
};

export default PeopleView;
