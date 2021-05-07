import React from "react";
import { DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { SiPowershell } from "react-icons/si";

export default function Skills() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="mx-4 mt-8 mb-4 text-xl md:text-5xl">Skills</h1>
      <div className="grid grid-cols-2 px-2 justify-items-center md:grid-cols-4">
        <div>
          <DiPython
            className="w-16 h-16 m-1 transition duration-200 ease-in-out md:h-36 md:w-36 hover:text-yellow-300"
            title="python"
          />
          <h2 className="text-lg text-center md:text-2xl">Python</h2>
        </div>
        <div>
          <DiReact
            className="w-16 h-16 m-1 transition duration-200 ease-in-out md:h-36 md:w-36 hover:text-cyan-400"
            title="react"
          />
          <h2 className="text-lg text-center md:text-2xl">ReactJs</h2>
        </div>
        <div>
          <DiJavascript1
            className="w-16 h-16 m-1 transition duration-200 ease-in-out md:h-36 md:w-36 hover:text-yellow-300"
            title="javascript"
          />
          <h2 className="text-lg text-center md:text-2xl">JavaScript</h2>
        </div>
        <div>
          <SiPowershell
            className="w-16 h-16 m-1 transition duration-200 ease-in-out md:h-36 md:w-36 hover:text-blue-600"
            title="powershell"
          />
          <h2 className="text-lg text-center md:text-2xl">PowerShell</h2>
        </div>
      </div>
    </div>
  );
}
