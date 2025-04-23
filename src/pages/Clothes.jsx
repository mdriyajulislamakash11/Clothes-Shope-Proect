import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Clothes = () => {
    const data = useLoaderData();

    const [sort, setSort] = useState(data);
  
    const handleSort = (sortBy) => {
      if(sortBy == "popularity"){
        // sort by popularity
        const popularity = [...data].sort((a,b) => b.popularity - a.popularity);
        setSort(popularity)
      }else if(sortBy == "rating"){
        // sort by rating
        const rating = [...data].sort((a,b) => b.rating - a.rating);
        setSort(rating)
      }
    }
  
    return (
      <>
        <div className="flex justify-between items-center my-16">
          <div>
            <h1 className="text-3xl font-thin">
              Sort Coffees by Popularity & Rating:
            </h1>
          </div>
          <div className="space-x-4">
            <button onClick={() => handleSort("popularity")} className="btn btn-warning">Sort By Popularity</button>
            <button onClick={() => handleSort("rating")} className="btn btn-warning">Sort By Rating</button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {sort.map((cloth) => (
            <Card key={cloth.id} cloth={cloth} />
          ))}
        </div>
      </>
    );
};

export default Clothes;
