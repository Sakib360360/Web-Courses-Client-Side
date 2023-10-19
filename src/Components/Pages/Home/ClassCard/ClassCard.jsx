const ClassCard = ({ cls }) => {
  const { picture, price, students, seats, title } = cls;

  return (
    <div className="bg-white shadow-xl p-2 rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <img className="w-full" src={picture} alt={title} />
      </div>

      <div className="mt-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-[#FF7426] font-bold">${price}</p>
        <p className="my-3">Sets available: {seats - students}</p>
        <button className="bg-[#FF7426] text-white px-4 py-2 text-[1rem] rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
