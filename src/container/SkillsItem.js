import React from 'react'
import'../responsivecss/SkillItem.css'

const SkillsItem = () => {
  return (
    <div>
        <div className="skills d-flex flex-column " style={{padding:'40px 40px'}}>

        <div className='d-flex justify-content-center'>
        <h1  style={{color:'#001c55', margin:70}}data-aos="fade-right"data-aos-duration="1500">
            What I DO?
        </h1>
        </div>
        

     
      <div className=" full-stack  d-flex ">

        <div className="fullstack-image d-flex justify-content-center align-items-center " style={{margin:'0 3rem'}}data-aos="fade-right"data-aos-duration="1500" data-aos-delay="2000">
        <img src="Images/fullstack.png" className="img-fluid" alt="..." style={{width:'50vw', height:'60vh' , borderRadius:40}}/>

        </div>
        <div className='about' style={{width:'50vw'}}>
            <h2 className='d-flex justify-content-center' style={{color:'#001c55' }}data-aos="fade-left"data-aos-duration="1500" data-aos-delay="1500">
                Full Stack Development
            </h2>
            <div className="log d-flex justify-content-center "data-aos="fade-left"data-aos-duration="1500" data-aos-delay="3000">
          
           <div className='marks relative-content'>
              <div className='custom-tooltip'>HTML</div>
            <i className="fa-brands fa-html5 fa-2xl mx-2 my-4"  style={{color: '#e83211',cursor:'pointer'}}></i>
           </div>
           <div className='marks  relative-content' >
            <div className='custom-tooltip'>CSS</div>
            <i className="fa-brands fa-css3 fa-2xl mx-2 my-4" style={{color: '#3666ba',cursor:'pointer'}}></i>
           </div>
           <div className='marks  relative-content'>
           <div className='custom-tooltip'>JavaScript</div>
            <i className="fa-brands fa-square-js fa-2xl mx-2 my-4" style={{color: '#d9b917',cursor:'pointer'}}></i>
            
           </div>

           <div className='marks  relative-content'>

            <div className='custom-tooltip'>React</div>
            <i className="fa-brands fa-react fa-2xl mx-2 my-4" style={{color: '#3cb3c3',cursor:'pointer'}}></i>
           </div>

           <div className='marks  relative-content'>

            <div className='custom-tooltip'>Node</div>
            <i className="fa-brands fa-node fa-2xl mx-2 my-4" style={{cursor:'pointer'}}></i>
           </div>
           <div className='marks  relative-content'>

            <div className='custom-tooltip'>NPM</div>
            <i className="fa-brands fa-npm fa-2xl mx-2 my-4" style={{color: '#4c2dbe',cursor:'pointer'}}></i>
           </div>
            </div>
            
            <div className='content d-flex flex-column my-5' style={{color:'#7f8daa', fontSize:20}} >
                <p data-aos="fade-left"data-aos-duration="500" data-aos-delay="3000"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Building responsive website front end using React-Redux and Bootstrap</p>
                <p data-aos="fade-left"data-aos-duration="500" data-aos-delay="3000"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Developing mobile applications using React Native and For Database we using MongoDB, MySQL</p>
                <p data-aos="fade-left"data-aos-duration="500" data-aos-delay="3000"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Creating application backend in Node, Express, PHP & Mongoose</p>
            </div>

        </div>


      </div>
      


      <div className="ux-design d-flex ">

        <div className="ux-img  d-flex justify-content-center align-items-center" style={{margin:'0 3rem'}}data-aos="fade-right"data-aos-duration="1500" >
        

        <img src="Images/ui.jpg" className="img-fluid rounded-circle" alt="..." style={{width:'50vw', height:'60vh'}}/>
        

        </div>
        <div className='about' style={{width:'50vw'}}>
            <h2 className='d-flex justify-content-center' style={{color:'#001c55' }}data-aos="fade-left"data-aos-duration="1500" >
                UI/UX Designer
            </h2>
            <div className="log d-flex justify-content-center"data-aos="fade-left"data-aos-duration="1500" data-aos-delay="4500">
            <div className='marks  relative-content'>
            <div className='custom-tooltip'>Figma</div>
            <i className="fa-brands fa-figma fa-2xl mx-2 my-4" style={{color: '#e76813', cursor:'pointer'}}></i>
            </div>
            </div>

            <div className='d-flex flex-column my-5' style={{color:'#7f8daa', fontSize:20}}>
                <p data-aos="fade-left"data-aos-duration="500" data-aos-delay="4500"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Designing highly attractive user interface for mobile and web applications</p>
                <p data-aos="fade-left"data-aos-duration="1000" data-aos-delay="4500"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>Customizing logo designs and building logos from scratch</p>
                <p data-aos="fade-left"data-aos-duration="1500" data-aos-delay="4500"> <i className="fa-solid fa-bolt mx-2" style={{color: '#e7820d'}}></i>reating the flow of application functionalities to optimize user experience</p>
            </div>

        </div>


      </div>
      </div>
    </div>
  )
}

export default SkillsItem
