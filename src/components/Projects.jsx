import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-4 pt-16">
      <div className="w-1/2">
        <ProjectCard />
        <div>Project 2</div>
      </div>
      <div className="w-1/2 pr-8">
        <div>Project 3</div>
        <div>Project 4</div>
      </div>
    </div>
  )
}

export default Projects