import React from "react";

interface Job {
  job_title: string;
  start_date: string;
  end_date: string;
  bullets: Array<string>;
}

interface WorkExperience {
  company: string;
  location: string;
  jobs: Job[];
}

const EXPERIENCES: ReadonlyArray<WorkExperience> = [
  {
    company: "Cerner Corporation",
    location: "Kansas City, Missouri",
    jobs: [
      {
        job_title: "Software Engineer",
        start_date: "May 2019",
        end_date: "Current",
        bullets: [
          "Automated crucial security checks and remediation on company-wide systems as a part of the DevSecOps team",
          "Own several tools/processes created by DevSecOps team",
          "Applied solutions across various operating systems and architectures",
          "Saved system engineers/owners countless work hours by creating automation tool for scanning server settings",
          "Developed multiple website front-ends using ReactJS",
          "Configuration management",
        ],
      },
    ],
  },
  {
    company: "Equity Real Estate & Company",
    location: "Bryan, Texas",
    jobs: [
      {
        job_title: "Website Manager/Developer",
        start_date: "May 2018",
        end_date: "December 2018",
        bullets: [
          "Redesign and convert all websites to follow responsive design",
          "Design and Manage MailChimp emails",
          "Management of all websites",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="m-4 text-xl md:text-5xl">Work Experience</h1>
      <div>
        {EXPERIENCES.map((exp: WorkExperience) => {
          return (
            <div
              key={exp.company}
              className="grid grid-cols-1 m-4 md:grid-cols-2 justify-items-center md:justify-items-start"
            >
              <h2 className="m-1 text-xl text-center md:mx-4 md:my-2 md:text-2xl">
                {exp.company}
              </h2>
              <h2 className="m-1 text-base md:mx-4 md:my-2 md:text-2xl md:justify-self-end">
                {exp.location}
              </h2>
              {exp.jobs.map((job: Job) => {
                return (
                  <div key={exp.company + "-" + job.start_date}>
                    <h3 className="m-1 text-base md:mx-4 md:my-2 md:text-xl">
                      {job.job_title}
                    </h3>
                    <h3 className="m-1 text-base md:mx-4 md:my-2 md:text-xl md:justify-self-end">
                      {job.start_date + " \u2014 " + job.end_date}
                    </h3>
                    <ul className="m-1 text-sm list-disc list-inside md:mx-4 md:my-2 col-span-full md:text-lg">
                      {job.bullets.map((bullet: string, index: number) => {
                        return (
                          <li
                            key={
                              exp.company +
                              "-" +
                              job.job_title +
                              "-bullet" +
                              index
                            }
                          >
                            {bullet}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
