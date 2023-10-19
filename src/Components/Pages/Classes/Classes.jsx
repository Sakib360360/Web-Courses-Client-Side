import { useEffect, useState } from "react";
import ClassCard from "../Home/ClassCard/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://web-courses-server-side.vercel.app/courses?limit=6")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-white text-black py-10">
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <ClassCard key={cls} cls={cls}></ClassCard>
        ))}
      </div>
    </section>
  );
};

export default Classes;
