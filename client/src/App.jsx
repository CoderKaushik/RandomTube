import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import Category1 from "./Pages/Categories/Category1.jsx";
import Sports from "./Pages/Sports/Sports.jsx";
import WatchSports from "./Pages/Sports/Watch.jsx";
import Anime from "./Pages/Anime/Anime.jsx";
import WatchAnime from "./Pages/Anime/Watch.jsx"
import News from "./Pages/News/News.jsx";
import WatchNews from "./Pages/News/Watch.jsx";
import Educational from "./Pages/Educational/Educational.jsx";
import WatchEducational from "./Pages/Educational/Watch.jsx";
import Motivation from "./Pages/Motivation/Motivation.jsx";
import WatchMotivation from "./Pages/Motivation/Watch.jsx";
import Travel from "./Pages/Travel/Travel.jsx";
import WatchTravel from "./Pages/Travel/Watch.jsx";
import Contribute from "./Pages/Contribute/Contribute.jsx";

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories-2" element={<Category1 />} />
          <Route path="/categories/sports" element={<Sports />} />
          <Route path="/categories/sports/watch" element={<WatchSports />} />
          <Route path="/categories/anime" element={<Anime />} />
          <Route path="/categories/anime/watch" element={<WatchAnime />} />
          <Route path="/categories/news" element={<News />} />
          <Route path="/categories/news/watch" element={<WatchNews />} />
          <Route path="/categories/educational" element={<Educational />} />
          <Route path="/categories/educational/watch" element={<WatchEducational />} />
          <Route path="/categories/motivation" element={<Motivation />} />
          <Route path="/categories/motivation/watch" element={<WatchMotivation />} />
          <Route path="/categories/travel" element={<Travel />} />
          <Route path="/categories/travel/watch" element={<WatchTravel />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
