/* eslint-disable @typescript-eslint/no-explicit-any */
import "./About.css";
import { Link } from "react-scroll";

const PDF_FILE_URL_CV = `${import.meta.env.VITE_BASE_URL}/cv.pdf`;

const AboutPage = () => {
  const downloadFileAtURL = (url: any) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="container-about">
      <div className="wrap-container-about">
        <img src="/assets/profile.jpg" alt="" />
        <div className="text-about">
          <h1>About Me</h1>
          <div className="line"></div>
          <p>
            I am a fresh graduated who wants to get a job in the front-end
            position. I don’t have working experience as a developer, but I am
            very interested in this position. I have foundation from study and
            have to learn about udemy/youtube/w3school. I can write HTML, CSS,
            Javascript, Typescript and can use Framework and ReactJS.
          </p>
          <div className="chose-profile">
            <i
              className="fa-brands fa-facebook"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=100003561443750"
                );
              }}
            ></i>
            <i
              className="fa-brands fa-github"
              onClick={() => {
                window.open("https://github.com/HamHarry");
              }}
            ></i>
          </div>
          <div className="btn">
            <Link
              to="Contact"
              smooth={true}
              duration={200}
              className="btn-contact"
            >
              Contact Me
            </Link>
            <button
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL_CV);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
