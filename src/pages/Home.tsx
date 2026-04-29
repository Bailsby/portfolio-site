import Hero from "../components/Hero";
import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Intro />
      <TechStack />
      <FeaturedProjects />
    </div>
  );
}