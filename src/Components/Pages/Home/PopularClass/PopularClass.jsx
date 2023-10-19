import { useEffect, useState } from "react";
import ClassCard from "../ClassCard/ClassCard";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses?limit=6")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-white text-black py-10">
      <h1 className="max-w-screen-xl mx-auto text-3xl font-bold px-1 mb-4 text-center">
        Popular classes
      </h1>
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <ClassCard key={cls._id} cls={cls}></ClassCard>
        ))}
      </div>
    </section>
  );
};

export default PopularClass;
