import type { NextPage } from "next";
import AboutProject from "../sections/AboutProject/AboutProject";

const Home: NextPage = () => {
  return (
    <div className="text-carbon">
      <AboutProject />
    </div>
  );
};

export default Home;
