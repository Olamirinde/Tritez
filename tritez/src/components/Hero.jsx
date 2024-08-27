import Image1 from "../assets/dress1.png";
import Image2 from "../assets/dress2.png";
import Image3 from "../assets/dress3.png";

const Hero = () => {
  return (
    <main className="flex min-h-screen w-full items-center bg-[#09668A] p-8 md:p-16">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Image1}
            width={200}
            height={400}
            alt="Dress 1"
            className="w-full max-w-sm"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left">
          <p className="text-3xl font-bold text-white md:text-6xl">
            Get the <span className="text-[#E2B93B]">Fashion</span> <br /> You
            Deserve
          </p>
          <button className="mt-6 rounded bg-white px-6 py-3 font-semibold text-[#09668A] transition-colors hover:bg-[#E2B93B] hover:text-white">
            Explore More
          </button>
          <img
            src={Image3}
            alt="Dress 3"
            className="mx-auto mt-8 w-full max-w-xs md:mx-0"
          />
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-start">
          <img src={Image2} alt="Dress 2" className="w-full max-w-sm" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
