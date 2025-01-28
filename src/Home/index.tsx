import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Goonsville from "./Goonsville";
import Overview from "./Overview";
import Team from "./Team";
import Slide from "./Slide";
import Story from "./Story";

const Home = () => {
  return (
    <div>
      <Header />

      <Overview />
      <Goonsville />
      <Story />
      <Slide />
      <Team />

      <Footer />
    </div>
  )
}

export default Home;