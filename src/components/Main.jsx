import axios from "axios"
import requests from "../Requests"
import { useState, useEffect } from "react"

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * 20)];
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    console.log(movie);
    const truncateString=(str,num)=>
    {
        if(str?.length>num){
            return str.slice(0,num)+'...'
        }
        else{
            return str;
        }
    }
    return (
        <div className="w-full h-[600px] text-white">
            <div className="w-full h-full">
                <div className="w-full h-[600px] absolute bg-gradient-to-r from-[#03071E] "></div>


                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />


                <div className=" absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-bold">{movie?.title}</h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
                        <button className="border  text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
                    </div>
                    <p className="text-gray-400 text-sm">{movie?.release_date} </p>
                    <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[35%]">{truncateString(movie?.overview,180)} </p>


                </div>
            </div>
        </div>

    );
};
export default Main;