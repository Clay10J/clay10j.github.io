import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFileCode } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
}

const PROJECTS: ReadonlyArray<Project> = [
  {
    name: "RickAndMortyPy",
    description:
      "Python command line script that fetches and displays data from the Rick and Morty API",
  },
  {
    name: "This Website!",
    description: "Built with NextJs, ReactJs, Typescript, and TailwindCSS",
  },
  {
    name: "Braille Printer",
    description:
      "Used Python, Google Speech API, Pytesseract, and other libraries to convert a CNC Machine into a braille printer. This allows for a cheaper solution than purchasing a conventional braille printer. This project also allows the visually impaired to print their own braille",
  },
  {
    name: "Portable Gaming Unit",
    description:
      "Develop a portable Retro Pie gaming system using C++ and the Kinect gaming API. Used C++, Kinect gaming API, Retro Pie for Raspberry Pi, and other components to integrate a portable gaming device within a briefcase. This gaming unit allows players to play classic games such as Mario World using motion commands via the Kinect",
  },
  {
    name: "Shading Program",
    description:
      "Use C++, OpenGL, and Glut to import a simple OBJ file to create desired shape/image with classic shading techniques such as flat, Gouraud, and Phong shading",
  },
  {
    name: "Polygon Scan Conversion and Clipping Program",
    description:
      "Uses C++, OpenGL, and Glut to draw and clip polygons on screen. The user is able to draw any polygon on screen and then select any area to clip the polygon within",
  },
];

const YOUTUBE_LINK = "https://youtu.be/D9kzakYD-NE";
const RAMP_LINK = "https://github.com/Clay10J/RickAndMortyPy";

export default function Projects() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="mx-4 mt-8 mb-4 text-xl md:text-5xl">Projects</h1>
      {PROJECTS.map((proj: Project) => {
        return (
          <div key={proj.name} className="m-4 ">
            <h2 className="m-1 text-xl text-center md:text-left md:mx-4 md:my-2 md:text-2xl">
              {proj.name}
              {/* Adds icon with link to RickAndMortyPy code */}
              {proj.name === "RickAndMortyPy" ? (
                <a href={RAMP_LINK} target="_blank">
                  <FaFileCode
                    className="inline-block w-5 h-5 mx-4 mb-1 md:w-6 md:h-6"
                    title="RickAndMortyPy"
                  />
                </a>
              ) : null}
              {/* Adds icon with link to YouTube video */}
              {proj.name === "Portable Gaming Unit" ? (
                <a href={YOUTUBE_LINK} target="_blank">
                  <AiFillYoutube
                    className="inline-block w-5 h-5 mx-4 mb-1 hover:text-red-600 md:w-8 md:h-8"
                    title="YouTube"
                  />
                </a>
              ) : null}
            </h2>
            <h3 className="m-1 text-sm text-center md:mx-8 md:my-2 md:text-left col-span-full md:text-lg">
              {proj.description}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
