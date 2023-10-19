import { useEffect, useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://web-courses-server-side.vercel.app/instructors?limit=6")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-white text-black py-10">
      <h1 className="max-w-screen-xl mx-auto text-3xl font-bold px-1 mb-4 text-center">
        Popular Instructor
      </h1>
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructor;
