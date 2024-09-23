import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import EducationPage from "./education/EducationPage";
import Experience from "./experience/ExperiencePage";
import HomePage from "./homePage/HomePage";
import Navbar from "./layout/Navbar";
import SkillPage from "./skill/SkillPage";

function App() {
  return (
    <div className="background-color">
      <div className="container" id="Home">
        <div className="wrap-container">
          <Navbar />
          <HomePage />
        </div>
      </div>
      <div id="About">
        <AboutPage />
      </div>
      <div id="Skills">
        <SkillPage />
      </div>
      <div id="Education">
        <EducationPage />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
