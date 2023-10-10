import React from 'react'

const ProjectDetails = () => {
  return (
    <div>
        <div className="projectdetails" style={{padding:'20px 60px'}}>

      <div className="project d-flex justify-content-between" >
        <div className="image" style={{width:'170vw', padding:'0 10px'}}>
            <img src="Images/project.svg" className="img-fluid" alt="..." style={{width:'100vw', height:'55vh'}}/>

        </div>
        <div className="details d-flex flex-column align-items-center">
        <h2 className='conatct' style={{color:'#001c55', paddingTop:50, paddingBottom:20 , fontSize:60 }}>
                    Projects
                </h2>
            <p  style={{paddding:'0 30px', fontSize:20 , textAlign:'center'}}>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default ProjectDetails
