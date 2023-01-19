import React from "react";
import { FeaturedMovie } from "@/components/featured-movie";
import Movies from "@/mocks/movies.json";
import Categories from "@/components/categories/categories";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories />
    </div>
  );
};

export default HomeContainer;
