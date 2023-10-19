import useAuth from "../../../hooks/useAuth";

const InstructorDashboard = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <> </>

    );
};

export default InstructorDashboard;