import Contact from "../components/sections/Contact";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
    </section>
  );
};

export default Home;
