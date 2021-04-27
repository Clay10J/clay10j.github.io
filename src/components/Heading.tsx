import React from 'react'

const NAME = "Clayton Joseck"
const JOB_TITLE = "Software Engineer"
const LOCATION = "Kansas City, Missouri"

export default function Heading() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl md:text-7xl">{NAME}</h1>
      <h2 className="text-base md:text-2xl">{JOB_TITLE}</h2>
      <h3 className="text-xs md:text-xl">{LOCATION}</h3>
    </div>
  )
}
