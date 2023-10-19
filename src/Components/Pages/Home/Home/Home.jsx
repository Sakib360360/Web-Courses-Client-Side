import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
