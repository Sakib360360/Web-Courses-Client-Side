import ClassCard from "../ClassCard/ClassCard";

const PopularClass = () => {
  return (
    <section className="bg-white text-black py-10">
      <h1 className="max-w-screen-xl mx-auto text-3xl font-bold px-1 mb-4 text-center">
        Popular classes
      </h1>
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

export default PopularClass;
