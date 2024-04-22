import React, { useEffect, useState } from "react";
import Bannebg from "../assets/banner.jpg";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
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
      <div className="px-10">
        <div>
          <div className="grid place-items-center my-5 w-full ">
            <img
              src={Bannebg}
              alt=""
              className="h-96 w-full object-cover
             rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="flex justify-end items-center">
            <Link to="/allmovies">
              <button className="px-4 py-1 bg-blue-300 rounded-2xl text-white font-semibold flex justify-center items-center gap-2">
                Explore All
                <IoIosSend />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-4 place-items-center gap-5 my-5">
          {movies.slice(0, 5).map((item, index) => {
            return (
              <div key={index} className="w-full">
                <div className="grid grid-cols-2 place-items-center gap-5 bg-gray-100 p-3 rounded-xl">
                  <div>
                    <img
                      src="https://picsum.photos/200/300"
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-5">
                    <p className="font-semibold text-xl">{item?.movie}</p>
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
      </div>
    </>
  );
};

export default Home;
