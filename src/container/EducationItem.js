import React from 'react'

const EducationItem = () => {
  return (
    <div>
      <div className="education" style={{padding:'10px 60px', paddingBottom:20}}>
        <div className="educationitem d-flex justify-content-between">
            <div className="img" style={{width:'50vw' }}>
            <img src="Images/education.svg" className="img-fluid rounded" alt="..." style={{width:'40vw', height:'80vh'}}/>

            </div>
            <div className="content d-flex flex-column  align-items-center" >
            <h2 className='conatct' style={{color:'#001c55', paddingTop:100, paddingBottom:20 , fontSize:50 }}>
                    Education
                </h2>

                <p style={{color:'#001c55', fontSize:25 , fontWeight:'bold', textAlign:'center'}}>Basic Qualification and Certifcations</p>

                <div className="logo d-flex justify-content-center">
                  
             
                <div className=" marks text-center mx-2" >
                  <div className='relative-content' style={{whiteSpace:'nowrap'}}>
    
                    <div className="custom-tooltip" style={{top:-19, }}>Coding Ninjas</div>
                    <img src="Images/coding.png"  className="rounded" style={{height:'40px', width:'60px', cursor:'pointer'}}  alt="..." />
                </div>
                </div>
               
                <div className="marks text-center mx-2" >
                <div className='relative-content'>
                    
                    <div className="custom-tooltip" style={{top:-19}}>Kaggle</div>
                    <img src="Images/kaggle.png" className="rounded" style={{height:'40px', width:'60px', cursor:'pointer'}} alt="..." />
                </div>
                </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default EducationItem
