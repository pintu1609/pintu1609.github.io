import React from 'react'

const ExperienceDetails = () => {
  return (
    <div>
      <div className="details" style={{padding:'20px 60px'}}>
            <div className="detailsitem d-flex justify-content-between">
                <div className="img d-flex justify-content-center align-items-center">
                <div className="image " style={{width:'40vw'}}>
                    <img src="Images/experience.svg" className="img-fluid" alt="..." style={{width:'100vw', height:'70vh'}}/>

                </div>
                </div>
                <div className="details" style={{padding:'10px  10px', marginLeft:20}}>
                    <div className="details item d-flex flex-column align-items-center">
                    <h2 className='conatct' style={{color:'#001c55', paddingTop:30, paddingBottom:20 , fontSize:60 }}>
                    Experience
                        </h2>
                        <h4 style={{color:'#001c55', fontSize:30}}>
                            Work and Internship
                        </h4>
                        <p  style={{ fontSize:20 , textAlign:'center'}}>I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default ExperienceDetails
