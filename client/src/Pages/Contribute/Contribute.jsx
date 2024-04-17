import React, { useState } from "react";

const Contribute = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categoryColors = {
    Sports: "bg-red-600",
    Anime: "bg-blue-600",
    News: "bg-green-600",
    Educational: "bg-yellow-600",
    Motivation: "bg-orange-600",
    Travel: "bg-red-600",
  };

  return (
    <div className="w-screen h-screen border-[1rem] animate-colorbg-change flex">
      <div className="h-full w-1/2 flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <select
            className={`block appearance-none w-[50%] h-[8rem] text-center text-[2rem] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline ${
              selectedCategory ? categoryColors[selectedCategory] : ""
            }`}
            onChange={handleChange}
          >
            <option disabled selected>
              Categories
            </option>
            <option value="Sports">Sports</option>
            <option value="Anime">Anime</option>
            <option value="News">News</option>
            <option value="Educational">Educational</option>
            <option value="Motivation">Motivation</option>
            <option value="Travel">Travel</option>
          </select>
        </div>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center p-4">
        <input type="text" placeholder="Link" className="w-1/2 h-[8rem] rounded-2xl text-center text-[2rem]" />
      </div>
    </div>
  );
};

export default Contribute;
