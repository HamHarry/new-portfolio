import "./HomePage.css";
import { Link } from "react-scroll";
const HomePage = () => {
  return (
    <div className="container-homepage">
      <div className="wrap-container-homepage">
        <h1>
          Hello, My name is <span className="text-color">Saowapak Noibua.</span>
          <br />
          and I am a <span className="text-color">Frontend Developer.</span>
        </h1>
        <div className="line"></div>
        <Link to="About" smooth={true} duration={200} className="btn-about">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
