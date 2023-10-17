import { useContext } from "react"; // TO DO Import korta hoba
import { AuthContext } from "../providers/AuthProvider"; // TO DO Import korta hoba

const useAuth = () => {
  const auth = useContext(AuthContext); // TO DO   Import korta hoba providers/AuthProvider
  return auth;
};

export default useAuth;
