import "./styles.css";
import Image from "./Image";
import Name from "./Name";
import Designation from "./Designation";
import Contact from "./Contact";
import About from "./About";
import Interests from "./Interests";
import Bottom from "./Bottom";
export default function App() {
  return (
    <div>
      <div className="background">
        <Image img="https://firebasestorage.googleapis.com/v0/b/sid-projects.appspot.com/o/1643089063754.jpg?alt=media&token=2f5f5f8c-fe78-4e6d-b27f-66217b6d91a9" />
        <Name name="Nagesh B C" />
        <Designation designation="Frontend Developer" />
        <Contact contactemail="Email" contactlinkedin="Linkedin" />
        <About
          headingabout="About"
          textabout="I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
          Interests Food expert. Music scholar. Reader. Internet fanatic. Bacon
          buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        />
        <Interests
          heading="Interests"
          text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        />
      </div>
      <Bottom
        twitter="Twitter Icon.png"
        facebook="Facebook Icon.png"
        instagram="Instagram Icon.png"
        linkedin="Linkedin Icon.png"
        github="GitHub Icon.png"
      />
    </div>
  );
}
