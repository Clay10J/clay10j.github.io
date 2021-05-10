import React from "react";

const NAME = "Clayton Joseck";
const JOB_TITLE = "Software Engineer";
const LOCATION = "United States";

export default function Heading() {
  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="mb-4 text-3xl md:text-7xl">{NAME}</h1>
      <h2 className="mb-4 text-base md:text-3xl">{JOB_TITLE}</h2>
      <h3 className="mb-4 text-xs md:text-xl">{LOCATION}</h3>
    </div>
  );
}
