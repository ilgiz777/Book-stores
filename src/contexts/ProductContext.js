import axios from "axios";
export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};
