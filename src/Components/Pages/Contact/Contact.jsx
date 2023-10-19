import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="p-4 backgroundColor text-black">
      <div>
        <h1 className="text-center  text-5xl font-bold">CONTACT US</h1>
      </div>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl">
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-bold mb-2 text-black">
                          YOUR NAME
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered text-black"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-bold mb-2 text-black">
                          PHONE NUMBER
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Number"
                        name="phone"
                        className="input input-bordered text-black"
                      />
                    </div>
                  </div>
                  <div className="form-control mb-8">
                    <label className="label">
                      <span className="label-text font-bold mb-2 text-black">
                        YOUR EMAIL
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email"
                      name="email"
                      className="input input-bordered text-black"
                    />
                  </div>

                  <div className="form-control mb-8">
                    <span className="label-text font-bold mb-2 text-black">
                      YOUR MESSAGE
                    </span>
                    <textarea
                      className="textarea textarea-bordered h-24 text-black"
                      placeholder="Ask Your question herel Please give us details about why you are getting in contact"
                      name="message"
                    ></textarea>
                  </div>

                  <div className="form-control mt-8">
                    <button
                      type="submit"
                      className="btn bg-[#FF7426] hover:bg-[#795648] hover:text-black hover:font-bold"
                    >
                      Send Message 
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-centerw-full  lg:w-1/2 lg:text-left">
              <div className="card h-[590px] shadow-xl">
                <figure>
                  <img
                  className="w-full"
                    src="https://i.ibb.co/rHsRFBf/person-308229d9.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-title text-2xl text-[#FF7426]">ONLINE SCHOOL</h1>
                  <p>
                    If you have any questions about our courses or are looking
                    for a tutor, you can email or use the contact form. Please
                    give us details about your enquiry. (course/subject, year
                    group or age of student, aims, etc.) Unfortunately we cannot
                    reply to enquiries that do not include any message. Our
                    office hours are 9am to 5pm UK time, but we always aim to
                    respond as quickly as possible.
                  </p>
                  <p className="mt-4">Phone: +8801761105578</p>
                  <p>Email: onlineschool@gmail.com</p>
                  <h3 className="mt-4">Social Link</h3>
                  <div className="card-actions justify-start">
                    <div className="flex gap-10">
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="" //TO DO
                      >
                        <FaFacebook />
                      </Link>
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="" //TO DO
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="" //TO DO
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
