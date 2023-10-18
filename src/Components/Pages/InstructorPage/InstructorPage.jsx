import InstructorCard from "../Home/InstructorCard/InstructorCard";

const InstructorPage = () => {
  return (
    <section className="bg-white text-black py-10">
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <InstructorCard></InstructorCard>
        <InstructorCard></InstructorCard>
        <InstructorCard></InstructorCard>
        <InstructorCard></InstructorCard>
        <InstructorCard></InstructorCard>
      </div>
    </section>
  );
};

export default InstructorPage;
