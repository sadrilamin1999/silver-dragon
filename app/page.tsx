import About from "@/components/About";
import Gallery from "@/components/Gallety";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";

const HomePage = () => {
  return (
    <main className="mt-20">
      <Hero />
      <About />
      <Instructors />
      <Gallery />
    </main>
  );
};

export default HomePage;
