import ClassCard from "../Home/ClassCard/ClassCard";

const Classes = () => {
  return (
    <section className="bg-white text-black py-10">
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
      </div>
    </section>
  );
};

export default Classes;
