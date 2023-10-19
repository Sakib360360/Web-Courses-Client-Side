import { useEffect, useState } from "react";
import InstructorCard from "../Home/InstructorCard/InstructorCard";

const InstructorPage = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);

  useEffect(() => {
    fetch("https://web-courses-server-side.vercel.app/instructors?limit=0")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-white text-black py-10">
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

export default InstructorPage;
