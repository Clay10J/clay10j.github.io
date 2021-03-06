import React from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const GITHUB_LINK = "https://www.github.com/clay10j";
const LINKEDIN_LINK = "https://www.linkedin.com/in/clayton-joseck";
const RESUME_LINK =
  "https://github.com/Clay10J/resume/raw/main/Clayton%20Joseck's%20Resume%202021.pdf";

export default function Socials() {
  return (
    <>
      <div>
        <a href={GITHUB_LINK} target="_blank">
          <FaGithub className="w-5 h-5 md:w-8 md:h-8" title="GitHub" />
        </a>
      </div>
      <div>
        <a href={LINKEDIN_LINK} target="_blank">
          <FaLinkedin className="w-5 h-5 md:w-8 md:h-8" title="LinkedIn" />
        </a>
      </div>
      <div>
        <a href={RESUME_LINK} target="_blank" download>
          <FaFileDownload
            className="w-5 h-5 md:w-8 md:h-8"
            title="Download My Resume"
          />
        </a>
      </div>
    </>
  );
}
