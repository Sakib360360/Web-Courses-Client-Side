import bannerImg from "../../../../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#FDF8EE] py-20">
      <div className="max-w-[1280px] mx-auto px-[1em] flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">
            The <span className="text-[#FF7426]">Smart</span>
            <br /> Choice for <span className="text-[#FF7426]">Future</span>
          </h1>

          <p className="break-words max-w-[30em] my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            similique harum, perferendis ipsum adipisci saepe laboriosam enim
            nostrum aperiam
          </p>

          <button className="bg-[#4d2c5e] text-white px-4 py-2 text-[1.2rem] rounded-full">
            Get Started
          </button>
        </div>

        <div className="w-[40em] bg-blue-400">
          <img className="w-full" src={bannerImg} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
