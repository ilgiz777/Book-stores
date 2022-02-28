import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <AuthContextProvider> */}
        <MainRoutes />
        {/* </AuthContextProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
