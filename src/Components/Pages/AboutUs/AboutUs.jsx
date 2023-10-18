import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 8000,
      once: false,
    });
  }, []);

  return (
    <div className="mb-8 mt-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="lg:w-1/2  relative"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <img
              src="https://i.ibb.co/72Bwdpk/12.jpg"
              className="w-3/4 h-[463px] rounded-lg shadow-2xl"
            />
            <img
              src="https://i.ibb.co/3mDPfKd/13.jpg"
              className="w-1/2 absolute right-5 top-1/3  rounded-lg border-8 border-blue-500 shadow-2xl"
            />
          </div>
          <div
            className="lg:w-1/2 space-y-5 p-4"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <h3 className="text-3xl text-[#FF7426] font-bold">About Us</h3>
            <h1 className="text-3xl font-bold">
            Unlocking Knowledge, One Click at a Time: Join Our Online School Today! 
            </h1>
            <p>It seems like you want to create a description for the About Us section of an online schools website. Heres a sample description:
Welcome to our Online School Your Gateway to Quality Education!
At Online School, we are committed to providing top-notch education that goes beyond traditional boundaries. Our mission is to empower learners of all ages to achieve their educational and career goals in a flexible and innovative online learning environment.</p>
            <button className="btn bg-[#FF7426] hover:text-black hover:bg-[#efd49d] text-white px-4 py-2">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
