import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectedMovie = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    try {
      const res = await axios.get(`https://dummyapi.online/api/movies/${id}`);
      console.log(res.data);
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <div className="grid place-items-center w-full h-screen">
        <div className="bg-gray-100 p-5 rounded-lg">
          {movie && (
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center">
              <div>
                <img
                  src={`https://picsum.photos/200?random=${id}`}
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-xl font-semibold">{movie?.movie}</p>
                <p className="text-green-700">{movie?.rating}</p>
                <a
                  href={movie?.imdb_url}
                  target="_blank"
                  className="underline text-amber-400"
                >
                  IMDB Review
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectedMovie;
