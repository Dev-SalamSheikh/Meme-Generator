import React, { useEffect, useState } from "react";
import Cards from "../components/Card";
import { getAllMemes } from "../api/Memes";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-5 text-center mt-5">
      {data.map((el) => (
        <Cards key={el.id} img={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default Home;
