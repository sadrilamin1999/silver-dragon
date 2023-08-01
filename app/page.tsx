import About from "@/components/About";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";

const HomePage = () => {
  return (
    <main className="mt-20">
      <Hero />
      <About />
      <Instructors />
    </main>
  );
};

export default HomePage;
