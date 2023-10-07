import React from 'react'

const SkillsItem = () => {
  return (
    <div>
        <div className="skills d-flex flex-column " style={{padding:'40px, 40px'}}>

        <div className='d-flex justify-content-center'>
        <h1  style={{color:'#001c55', margin:70}}>
            What I DO?
        </h1>
        </div>
        

     
      <div className="web d-flex ">

        <div className="img mx-5">
        <img src="Images/fullstack.png" className="img-fluid" alt="..." style={{width:'50vw', height:'60vh' , borderRadius:40}}/>

        </div>
        <div className='about'>
            <h2 className='d-flex justify-content-center' style={{color:'#001c55' }}>
                Full Stack Development
            </h2>
            <div className="log d-flex justify-content-center ">
            <i className="fa-brands fa-html5 fa-2xl mx-2 my-4" style={{color: '#e83211'}}></i>
            <i className="fa-brands fa-css3 fa-2xl mx-2 my-4" style={{color: '#3666ba'}}></i>
            <i className="fa-brands fa-square-js fa-2xl mx-2 my-4" style={{color: '#d9b917'}}></i>
            <i className="fa-brands fa-react fa-2xl mx-2 my-4" style={{color: '#3cb3c3'}}></i>
            <i className="fa-brands fa-node fa-2xl mx-2 my-4"></i>
            <i className="fa-brands fa-npm fa-2xl mx-2 my-4" style={{color: '#4c2dbe'}}></i>
            </div>
            
            <div className='d-flex flex-column my-5' style={{color:'#7f8daa', fontSize:20}} >
                <p> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Building responsive website front end using React <br />-Redux and Bootstrap</p>
                <p> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Developing mobile applications using React Native <br /> and For Database we using MongoDB, MySQL</p>
                <p> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Creating application backend in Node, Express, <br /> PHP & Mongoose</p>
            </div>

        </div>


      </div>
      


      <div className="web d-flex ">

        <div className="img mx-5">
        <img src="Images/ui.jpg" className="img-fluid rounded-circle" alt="..." style={{width:'50vw', height:'60vh'}}/>

        </div>
        <div className='about'>
            <h2 className='d-flex justify-content-center' style={{color:'#001c55' }}>
                UI/UX Designer
            </h2>
            <div className="log d-flex justify-content-center">
            <i className="fa-brands fa-figma fa-2xl mx-2 my-4" style={{color: '#e76813'}}></i>
            </div>

            <div className='d-flex flex-column my-5' style={{color:'#7f8daa', fontSize:20}}>
                <p> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Designing highly attractive user interface for <br /> mobile and web applications</p>
                <p> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Customizing logo designs and building logos from <br /> scratch</p>
                <p> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>reating the flow of application functionalities to <br /> optimize user experience</p>
            </div>

        </div>


      </div>
      </div>
    </div>
  )
}

export default SkillsItem
