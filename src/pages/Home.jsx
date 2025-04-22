import React from "react";
import Banner from "../components/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* bannet */}
      <Banner />

      {/* Heading  */}
      <Heading
        title="Browse Coffees by Categorys"
        subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi?"
      />

      {/* Category ways tab */}

      <Categories categories={categories} />

      {/* dynamic Routes */}
      <Outlet />
    </div>
  );
};

export default Home;
