"use client";

import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
// import Projects from "./components/projects";
import Skills from "./components/skills";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
}
