import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AuthContextProvider> */}
        <MainRoutes />
        {/* </AuthContextProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
