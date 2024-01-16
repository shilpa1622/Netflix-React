import { useState } from 'react';
import {FaHeart, FaRegHeart } from "react-icons/fa";

const Movie=({item})=>{
    const [like, setLike]=useState(false);


    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[240px] inline-block cursor-pointer relative p-3">
          <img className="rounded"
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt={item?.title}
          />
          <div className="absolute top-0 left-0 w-full h-full hover:bg-[#03071E]/80 opacity-0 hover:opacity-100 text-white">
            <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {item?.title}
            </p>
            <p>
              {like ? (
                <FaHeart className="absolute top-4 left-4" />
              ) : (
                <FaRegHeart className="absolute top-4 left-4" />
              )}
            </p>
          </div>
        </div>
    )
}

export default Movie
