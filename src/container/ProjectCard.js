import React from 'react'
import projectdata from '../Data/ProjectData'
import ProjectItem from './ProjectItem'

const ProjectCard = () => {

   const handleMoreProjectClick=()=>{
      const projectlink='https://github.com/pintu1609';
      window.open(projectlink, '_blank')
    }

  return (
    <div>
      <div className="project" style={{padding:'20px 60px'}}>
        <div className="row justify-content-center">
       { projectdata.map((element)=>{
        return <div className="col-md-6" key={element.user_id} style={{justifyContent:'center'}}>
            <ProjectItem title={element.title} body={element.body} duration={element.duration} image={element.image} link={element.projectlink}  />
        </div>

        })}
        </div>
        <div className='text-center'>

        <button type="button " className=" button-hover" onClick={handleMoreProjectClick}>More Project</button>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
