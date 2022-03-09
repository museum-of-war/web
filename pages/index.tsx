import type { NextPage } from "next";
import Content from "../sections/Content/Content";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
