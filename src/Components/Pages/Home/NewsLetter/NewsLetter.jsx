import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="bg-white text-black py-10">
      <div className="max-w-screen-xl mx-auto bg-[#4d2c5e] text-white text-center py-12 rounded-xl">
        <h1 className="text-3xl font-semibold">Subscribe to our news letter</h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <div className="bg-white news-input flex justify-between items-center p-1 rounded-[10em] overflow-hidden">
          <input
            className="rounded-[10em] p-4 w-full bg-transparent border-none outline-none text-black"
            type="email"
            placeholder="Your email address"
            name="email"
          />
          <input
            className="bg-[#FF7426] rounded-[10em] py-4 px-6 cursor-pointer"
            type="submit"
            value={"Send"}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
