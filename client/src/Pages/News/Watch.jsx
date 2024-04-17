import React from "react";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className="h-screen w-screen bg-green-500 border-[0.5rem] border-green-600 flex justify-center items-center">
      <div className="w-[60%] h-[80%] flex justify-center items-center">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/pdQFXXLDSc0?si=tm-G-hWmgNxHXHIn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-[10rem] h-[5rem] ml-8 flex justify-center items-center">
        <Link className="w-full h-full flex justify-center items-center rounded-2xl border-[0.5rem] border-green-600 text-semibold text-[1.5rem] hover:bg-green-600">
          <p>Next</p>
        </Link>
      </div>
    </div>
  );
};

export default Watch;
