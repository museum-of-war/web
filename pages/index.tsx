import type { NextPage } from "next";
import Content from "../sections/Content/Content";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="text-carbon">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
