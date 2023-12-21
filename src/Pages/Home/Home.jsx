import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import Banner from "./../../Components/Banner/Banner";

const Home = () => {
  const axiosSecure = useAxiosSecure();

  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>

      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Discover Our Popular Contests
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Immerse yourself in a world of creativity and innovation. <br />{" "}
        Discover thrilling contests that will challenge your skills and broaden
        your horizons.
      </p>
      {/* <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
      >
        {contests?.map((item) => (
          <ContestCard item={item} key={item._id}></ContestCard>
        ))}
      </div> */}

      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Explore the Achievements of Our Contest Winners
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Embark on a journey through the outstanding accomplishments of our
        contest winners. <br />
        Immerse yourself in a world of creativity and innovation as you discover
        the thrilling contests <br /> that have challenged participants and
        broadened their horizons.
      </p>
      {/* <div className="my-16">
        <ContestWinner></ContestWinner>
      </div> */}
      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Some of our Best Contest Creators
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Dive into a journey showcasing the remarkable accomplishments of our
        contest winners. <br />
        Immerse yourself in a realm of creativity and innovation as you uncover
        the captivating contests <br /> that have not only challenged
        participants but also expanded their horizons.
      </p>
      {/* <div className="my-20 bg-slate-100 mx-auto pt-24">
        <BestCreator></BestCreator>
      </div> */}
    </div>
  );
};

export default Home;
AOS.init();
