import React from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Heading from "../components/Heading";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function index() {
  return (
    <>
      <Heading />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </>
  );
}
