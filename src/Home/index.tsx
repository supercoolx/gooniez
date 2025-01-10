import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Goonsville from "./Goonsville";
import Overview from "./Overview";
import Team from "./Team";
import Slide from "./Slide";

const Home = () => {
  return (
    <div className="">
      <Header />

      <Overview />
      <Goonsville />
      <Team />
      <Slide />

      <Footer />
    </div>
  )
}

export default Home;