import React from "react";

const SCHOOL_NAME = "Texas A&M University";
const SCHOOL_LOCATION = "College Station, Texas";
const SCHOOL_START_DATE = "September 2014";
const SCHOOL_END_DATE = "December 2018";
const MAJOR_DEGREE = "Bachelor's of Science, Computer Engineering";
const MINOR_DEGREE = "Minor in Mathematics";

export default function Education() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="mx-4 mt-8 mb-4 text-xl md:text-5xl">Education</h1>
      <div>
        <div className="grid grid-cols-1 m-4 md:grid-cols-2 justify-items-center md:justify-items-start">
          <h2 className="m-1 text-xl text-center md:text-left md:mx-4 md:my-2 md:text-2xl">
            {SCHOOL_NAME}
          </h2>
          <h2 className="m-1 text-base md:mx-4 md:my-2 md:text-2xl md:justify-self-end">
            {SCHOOL_LOCATION}
          </h2>
          <h3 className="m-1 text-base italic md:mx-4 md:my-2 md:text-xl">
            {MAJOR_DEGREE}
          </h3>
          <h3 className="m-1 text-base md:mx-4 md:my-2 md:text-xl md:justify-self-end">
            {SCHOOL_START_DATE + " \u2014 " + SCHOOL_END_DATE}
          </h3>
          <h3 className="m-1 text-base italic md:mx-4 md:my-2 md:text-xl">
            {MINOR_DEGREE}
          </h3>
        </div>
      </div>
    </div>
  );
}
