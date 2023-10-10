import React from 'react'

const Degree = () => {
    const handleWebsite1Click=()=>{
        const websiteURL='http://cic.du.ac.in/'
        window.open(websiteURL, '_blank')
    }
  return (
    <div>
      <div className="degree" style={{padding:'20px 80px'}}>
        <div className="degrees d-flex flex-column justify-content-center align-items-center">

                <h2 className='conatct' style={{color:'#001c55', paddingTop:10, paddingBottom:30 , fontSize:35, fontWeight:'bold', paddingLeft:'12vw' }}>
                    Degrees Recevied or Pursuing
                </h2>
            <div className="content d-flex justify-content-between">
                <div className="image mx-4 d-flex align-items-center">
                    <div className="text-center mx-2" >
        
                        <img src="Images/du.jpeg" className="rounded-circle" style={{height:'36vh', width:'20vw', }} alt="..." />
                    </div>
                </div>

            
            <div className="about">
                <div className="card" style={{borderRadius:15}} >
                    <div className="head " style={{color:'#001c55', background:'#85b7d5', padding:'0px 5px', borderRadius:'15px 15px 0 0'}}>
                    <div className='title d-flex justify-content-between my-3'>
                    <h1 className="card-title" style={{fontSize:25, fontWeight:'bold'}}>Cluster Innovation Centre, University Of Delhi </h1>
                    <h5 style={{padding:'5px 10px' , fontSize:15}}>
                        2020-2024
                    </h5>

                    </div>
                    <h3 style={{fontSize:16, fontWeight:'bold'}}>B.Tech in Information Technology & Mathematical Innovation</h3>
                    </div>
                    <div className="card-body"style={{color:'#001c55', fontSize:18}}>
                        
                        <p className="card-text" ><i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i> I have studied basic Information Technology subjects like DS, Algorithms, DBMS, OS, CA, AI etc.</p>
                        <p className="card-text"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Apart from this, I have done courses on Full Stack Development & Python.</p>

                        <p className="card-text"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i> I was in top 10% of students in Entrance Exam Conducted by DUET. </p>

                        <button type="button" className="button-degree d-flex ms-auto"  onClick={handleWebsite1Click}>Visit Website</button>

                    </div>

                </div>
            </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Degree
