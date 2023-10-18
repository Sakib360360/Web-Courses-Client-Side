const InstructorCard = () => {
  return (
    <div className="bg-white shadow-xl p-2 rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/1018800722/photo/im-just-out-living-life.webp?b=1&s=170667a&w=0&k=20&c=wG_ShHMzJY25UmWf__-3in7gC_K5NH6KB19IhrGQTjI="
          alt="class"
        />
      </div>

      <div className="mt-4">
        <h1 className="font-bold">Jhone Deo</h1>
        <p className="my-3">email: example@gmail.com</p>
      </div>
    </div>
  );
};

export default InstructorCard;
