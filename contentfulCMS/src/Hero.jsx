import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Contentful CMS is a portfolio showcase application built using React
            and integrated with Contentful, a headless CMS. It displays my
            previous projects in a dynamic, visually appealing format. Users can
            explore each project and click to visit its live URL. This project
            demonstrates my skills in managing content with a CMS and creating
            responsive React applications.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
