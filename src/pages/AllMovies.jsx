import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://dummyapi.online/api/movies");
      console.log(res.data);
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="mx-20 my-10">
        <h1 className="text-2xl font-semibold text-amber-400">All Movies</h1>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-5">
        {movies.map((item, index) => {
          return (
            <div key={index} className="w-40">
              <div className="bg-gray-100 p-3 rounded-xl">
                <div>
                  <img
                    src="https://picsum.photos/200/300"
                    alt=""
                    className="rounded-lg"
                  />
                  <p className="font-semibold text-xl">{item?.movie}</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                  <span className="text-green-500 my-5 ">{item.rating}</span>
                  <button
                    className="px-3 py-1 bg-purple-100 rounded-xl
                      "
                    onClick={() => navigate("/movie/" + item?.id)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllMovies;
