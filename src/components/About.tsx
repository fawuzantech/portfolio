import React from 'react'
import img from '../assets/me.jpg'
const About: React.FC = () => {
  return (
    <section id="about" className="my-0">
       <div className='flex justify-center p-9 '>
        <img  className="rounded-full" src={img} alt="image"  width={400}  height={400}/>
        </div>
      <p className="mb-4 text-lg leading-relaxed">
        I’m a software engineer passionate about the web and Agentic Workflows.
        My journey started in 2022 and has led me to work on cutting-edge projects and innovative technologies.
      </p>
      <p className="text-lg leading-relaxed">
        I value clean code, user-centric design, and continuous learning.
        I also create content about building agentic workflows that solves the problem of repetitive tasks.
        This portfolio is a snapshot of my technicalexpertise and projects.
      </p>
    </section>
  )
}

export default About
