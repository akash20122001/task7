import React, { useEffect, useState } from 'react';
import Carousel from "./Carousel";
import Card from "./Card";
import axios from 'axios';

function Contents() {

    const [trendingMovs, setTrendingMovs] = useState([]);
    const [trendingTV, setTrendingTV] = useState([]);
    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);

    const [api1, setApi1] = useState("");
    const [api2, setApi2] = useState("");
    

    const getMovies = async () => {
        // const `https://api.themoviedb.org/3/trending/tv/week?api_key=382270394e7cb990a913884a4ac760de`;
        const response = await axios.get(api1);
        const response2 = await axios.get(api2);
        setTrendingMovs(response.data.results);
        setTrendingTV(response2.data.results);
        console.log(trendingTV);
        setResult(trendingMovs?.slice(0,6));
        setResult2(trendingTV?.slice(0,6));
    }
    const [dummy, setDummy] = useState(true);
    const [displayValue, setDisplayValue] = useState("invisible")
    const [displayValue2, setDisplayValue2] = useState("visible")
    const [datType, setDatType] = useState("");
    const [heading1, setHeading1] = useState("");
    const [heading2, setHeading2] = useState("");
    const change = (type) => {
       
        if(type==="t"){
            setApi1("https://api.themoviedb.org/3/trending/movie/week?api_key=382270394e7cb990a913884a4ac760de");
            setApi2("https://api.themoviedb.org/3/trending/tv/week?api_key=382270394e7cb990a913884a4ac760de");
            setHeading1("Trending in Movies");
            setHeading2("Trending on TV");
        }
        else if(type==="p"){
            setApi1("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=382270394e7cb990a913884a4ac760de");
            setApi2("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=382270394e7cb990a913884a4ac760de");
            setHeading1("Popular Movies");
            setHeading2("Now Playing");
        }
        else if(type==="u"){
            setApi1("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=382270394e7cb990a913884a4ac760de");
            setApi2("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=382270394e7cb990a913884a4ac760de");
            setHeading1("Upcoming Movies");
            setHeading2("Top Rated Movies");
        }
        setDatType(type);
    }
    useEffect(() => {

                getMovies();
                console.log("hellp");

      }, [datType]);


  return (
    <div className="overflow-auto">
        <Carousel/>
        <div className='flex justify-center mt-6'>
            <button className="bg-red-600 py-3 px-6 rounded-full font-bold text-white mx-6" onClick={()=>change("t")}>Trending</button>
            <button className="bg-red-600 py-3 px-6 rounded-full font-bold text-white mx-6" onClick={()=>change("p")}>Popular</button>
            <button className="bg-red-600 py-3 px-6 rounded-full font-bold text-white mx-6" onClick={()=>change("u")}>Upcoming</button>
        </div>
        <div className="px-12 mb-6">
            <h1 className={`font-bold text-white text-2xl`} >{heading1}</h1>
            <div className="flex mt-6 overflow-auto">
                {
                    result?.map((item,i)=>(
                        <Card name={item.title} key = {i} rating={item.vote_average} image = {item.backdrop_path} />
                    ))
                }
                
               
            </div>
        </div>
        <div className="px-12">
            <h1 className="font-bold text-white text-2xl">{heading2}</h1>
            <div className="flex mt-6 overflow-auto">
                {
                    result2?.map((item,i)=>(
                        <Card name={item.name} key = {i} rating={item.vote_average} image = {item.backdrop_path} />
                    ))
                }
                
               
            </div>
        </div>
    </div>
  );
}

export default Contents;
