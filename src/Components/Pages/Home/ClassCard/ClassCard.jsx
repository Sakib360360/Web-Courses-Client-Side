const ClassCard = () => {
  return (
    <div className="bg-white shadow-xl p-2 rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/1410950079/photo/modern-style-classroom-in-the-morning-3d-render.webp?b=1&s=170667a&w=0&k=20&c=D3KekIGN_W76ScIe_vKZURixg0hXdXnbPfhKywcItro="
          alt="class"
        />
      </div>

      <div className="mt-4">
        <h1 className="font-bold">Class title goes here</h1>
        <p className="text-[#FF7426] font-bold">$59</p>
        <p className="my-3">Sets available: 4</p>
        <button className="bg-[#FF7426] text-white px-4 py-2 text-[1rem] rounded-full">
          Join Course
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
