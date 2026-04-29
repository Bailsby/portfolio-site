import { motion } from "framer-motion";

import Hero from "../components/Hero";
import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <motion.div
      className="space-y-32 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Intro />
      <TechStack />
      <FeaturedProjects />
    </motion.div>
  );
}