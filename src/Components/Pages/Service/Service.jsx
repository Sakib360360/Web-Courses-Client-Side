import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Service = () => {
   
  return (
    <>
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="grid grid-rows-2 gap-6 md:gap-20">
            <div className="text-center ">
              <img
                className="w-full px-8"
                src="https://i.ibb.co/bJBXwsj/66.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <img
                className="w-full px-8"
                src="https://i.ibb.co/xDBsjZ0/55.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="card card-compact mt-4 md:mt-44 shadow-xl">
              <div className="w-full px-8">
                <h1 className="text-5xl mb-4 font-extrabold text-black text-center">
                  Our Services
                </h1>
                <p>
                  We keep it simple. We specialize in designing and developing
                  custom Wix websites. Our websites are simple to edit and
                  update, developed to require no technical knowledge.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn mt-4 w-full bg-[#FF7426]  hover:text-black hover:bg-[#efd49d] text-white px-4 py-2">
                    Our Service
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6 md:gap-20">
            <div className="text-center">
              <img
                className="w-full px-8"
                src="https://i.ibb.co/Ss5VD9P/44.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <img
                className="w-full px-8"
                src="https://i.ibb.co/k2hDCSs/33.jpg"
                alt=""
              />
            </div>
          </div>
        </div> <br /> <hr />

        <div>
          <div className="bg-[#ffff]">
            <div className="max-w-7xl mx-auto font-poppins pt-16 pb-16">
              <h2 className="text-4xl text-[#120303] font-extrabold text-center max-sm:text-2xl">
              Join the Education.com community!
              </h2>

              <div className="carousel w-full">
                <div
                  id="item1" className="carousel-item w-full items-center justify-center mt-10">
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 px-5 md:px-5">
                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src='https://i.ibb.co/n1Cvhww/compare-fibre-e5s-Tz361-Jzg-unsplash.jpg'
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Live Virtual Classes
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>

                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/X7LvGnY/annie-spratt-Qckxruozj-Rg-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Interactive E-Learning
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>

                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/4TwsZdn/compare-fibre-Ji-OFFI3-W7-IA-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Personalized Tutoring Online
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>

                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/vHqz56m/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Flexible Learning Schedules
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="item2" className="carousel-item w-full items-center justify-center mt-10">
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 px-5 md:px-5">
                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/h70dWB6/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Access to Educational Resources
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>

                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/RCZqW64/wes-hicks-4-Ee-Tna-C1-S4-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Homework Help and Support
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>

                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/kqntx8L/giovanni-gagliardi-fv-T3t9i-Oa-JI-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Certified Online Instructors
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>

                    <div className="card shadow-xl bg-[#EEF1F6] rounded-lg">
                      <figure className="">
                        <img
                          src="https://i.ibb.co/qpRm0fv/ahmed-hindawi-bj-B2m-GI8-Pt-I-unsplash.jpg"
                          className="w-40 h-40 mt-5 rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="font-bold text-xl text-center text-[#000000]">
                        Certified Online Instructors
                        </h2>
                        <p className="font-medium text-base">
                          Duis aute irure dolor in repreh enderit in volup tate
                          velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full  gap-2">
                <a
                  href="#item1"
                  className="bg-[#8b863e] px-2 py-1 rounded-lg text-[#ffff]"
                >
                  <FaArrowLeft></FaArrowLeft>
                </a>
                <a
                  href="#item2"
                  className="bg-[#8a8943] px-2 py-1 rounded-lg text-[#ffff]"
                >
                  <FaArrowRight></FaArrowRight>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Service;
