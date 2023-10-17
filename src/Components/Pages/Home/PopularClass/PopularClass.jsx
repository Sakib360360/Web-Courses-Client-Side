import Card from "../Card/Card";

const PopularClass = () => {
  return (
    <section className="bg-white text-black py-10">
      <h1 className="max-w-[1280px] mx-auto text-3xl font-bold px-1 mb-4">
        Popular classes
      </h1>
      <div className="max-w-[1280px] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default PopularClass;
