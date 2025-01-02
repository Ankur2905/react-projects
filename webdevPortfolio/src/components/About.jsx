import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m Ankur, a web developer passionate about crafting intuitive,
            engaging, and efficient digital experiences. With expertise in React
            and modern web technologies, I’m always eager to learn, solve
            challenges, and grow as a developer while exploring creative
            possibilities beyond the code.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
