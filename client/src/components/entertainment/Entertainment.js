import React, { useEffect, useState } from "react";

import axios from "axios";
import { useWindowDimensions } from "../../utils/dimensions";
import EntertainmentCard from "./EntertainmentCard";
const Entertainment = () => {
  //   const { width, height } = useWindowDimensions();

  const [ent, setEnt] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/entertainment");
    setEnt(response.data);
    console.log(response.data);
  };
  console.log(ent);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-96 bg-[#1e1e1e] flex flex-col py-5 px-2 md:p-7 md:h-auto xl:px-28">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col justify-between items-start">
          <h2 className="font-sans font-semibold block text-white text-lg md:text-2xl">
            ENTERTAINMENT
          </h2>
        </div>
        {/* <p className="font-sans font-semibold block text-white text-base md:text-xl underline-offset-2 underline focus:text-opacity-75">
          See All
        </p> */}
      </div>

      <div className="text-white">
        {ent.map((data, index, arr) => (
          <EntertainmentCard
            //
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
