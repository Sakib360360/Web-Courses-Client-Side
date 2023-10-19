/* eslint-disable react/prop-types */
const InstructorCard = ({ instructor }) => {
  const { instructor_name, picture, instructor_email } = instructor;

  return (
    <div className="bg-white shadow-xl p-2 rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <img className="w-full" src={picture} alt={instructor_name} />
      </div>

      <div className="mt-4">
        <h1 className="font-bold">{instructor_name}</h1>
        <p className="my-3">Email: {instructor_email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
