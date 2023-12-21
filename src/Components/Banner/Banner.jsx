import AOS from "aos";
import "aos/dist/aos.css";

// ..

const Banner = () => {
  return (
    <div className="mx-auto ">
      <div className="relative">
        <img
          src={"https://i.ibb.co/hd0m4T7/Project-162-09.jpg"}
          className="h-[350px] md:h-[400px] lg:h-[700px] w-full transition-opacity opacity-40"
        />
      </div>
      <div
        className="w-2/3 mx-auto absolute top-60 md:top-60 lg:top-72 -mt-4 md:-mt-20 ml-12 md:ml-24 lg:-mt-8 lg:ml-44"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-2xl md:text-3xl my-3 md:my-5 lg:text-5xl text-center text-black font-bold">
          Elevate Your Creative Vision <br /> Effortlessly
        </h1>
        <h3 className="text-center font-medium text-base md:text-xl">
          Streamline your project contests and celebrate talent across domains.{" "}
          <br />
          We provide the platform you need for seamless contest creation and
          efficient winner selection.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
