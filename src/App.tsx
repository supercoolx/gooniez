import { ToastContainer } from "react-toastify";
import Loading from "./Layouts/Loading";
import Home from "./Home";

const App = () => {
  return (
    <Loading>
      <Home />
      <ToastContainer theme="dark" />
    </Loading>
  )
}

export default App;