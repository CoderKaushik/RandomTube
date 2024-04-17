import React from "react";
import { Link } from "react-router-dom";

const Category1 = () => {
  return (
    <div className="h-full w-screen bg-gray-600 flex flex-col items-center gap-8 max-sm:flex-grow-y">
      <h1 className="font-bold text-[3rem] max-sm:text-[2rem] mt-4 text-gray-900 text-center">
        Choose your preferred category
      </h1>
      <div className="w-[80%] h-[80%] flex justify-center items-center">
        <div className="w-[90%] h-full grid sm:grid-cols-2 grid-cols-1 gap-y-60 gap-x-8 grid-rows-6 p-4">
          <Link
            to="/categories/sports"
            className="mt-16 py-4 flex justify-center items-center h-[8rem] text-center bg-[#c53030] rounded-2xl font-semibold text-[2rem] text-gray-900"
          >
            <button>Sports</button>
          </Link>

          <Link
            className="mt-16 py-4 flex justify-center items-center h-[8rem] text-center bg-[#2b6cb0] rounded-2xl font-semibold text-[2rem] text-gray-900"
            to="/categories/anime"
          >
            <button>Anime</button>
          </Link>

          <Link
            className="mt-16 py-4 flex justify-center items-center h-[8rem] text-center bg-[#2f855a] rounded-2xl font-semibold text-[2rem] text-gray-900"
            to="/categories/news"
          >
            <button>News</button>
          </Link>

          <Link
            className="mt-16 py-4 flex justify-center items-center h-[8rem] text-center bg-[#b7791f] rounded-2xl font-semibold text-[2rem] text-gray-900"
            to="/categories/educational"
          >
            <button>Educational</button>
          </Link>

          <Link
            className="mt-16 py-4 flex justify-center items-center h-[8rem] text-center bg-[#9c4221] rounded-2xl font-semibold text-[2rem] text-gray-900"
            to="/categories/motivation"
          >
            <button>Motivation</button>
          </Link>

          <Link
            className="mt-16 py-4 flex justify-center items-center h-[8rem] text-center bg-[#c53030] rounded-2xl font-semibold text-[2rem] text-gray-900"
            to="/categories/travel"
          >
            <button>Travel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category1;

//sports, anime, news, educational, motivational, travel
