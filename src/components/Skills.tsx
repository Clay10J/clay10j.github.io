import React from "react";
import { DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { SiPowershell } from "react-icons/si";

export default function Skills() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="mx-4 mt-8 mb-4 text-xl md:text-5xl">Skills</h1>
      <div className="grid grid-cols-2 px-2 justify-items-center md:grid-cols-4">
        <DiPython className="w-16 h-16 m-1 md:h-36 md:w-36" title="python" />
        <DiReact className="w-16 h-16 m-1 md:h-36 md:w-36" title="react" />
        <DiJavascript1
          className="w-16 h-16 m-1 md:h-36 md:w-36"
          title="javascript"
        />
        <SiPowershell
          className="w-16 h-16 m-1 md:h-36 md:w-36"
          title="powershell"
        />
      </div>
    </div>
  );
}
