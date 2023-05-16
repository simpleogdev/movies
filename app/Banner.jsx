"use client";
import React, { useEffect } from "react";
import { useState } from "react";
// import axios from './axios';
import axios from "./apis/Axios";
import requests from "./apis/Request";
import Image from "next/image";

const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
};

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  const imgUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  return (
    <div>
      <div className="my-12 w-[85%] sm:h-[400px] w-[50%] mx-auto my-32">
        <h1 className="text-2xl text-white sm:text-white font-bold text-3xl text-center mb-10">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <Image
          className="sm:bg-no-repeat rounded-xl"
          src={imgUrl}
          alt="img"
          width={1920}
          height={1080}
        />
        <h1 className="text-white mt-10 font-bold">{truncate(movie?.overview, 140)}</h1>
      </div>
    </div>
  );
};

export default Banner;
