import React, {useEffect} from 'react'
import '../responsivecss/HomeItem.css'
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles



const HomeItem = () => {

  


 const handleGitHubClick =()=>{
    const gitHubUrl = 'https://github.com/pintu1609';
    window.open(gitHubUrl, '_blank');
 }
 const handleGmailClick=()=>{
    const emailAddress = 'pintukumar160900@gmail.com';
    const mailtoUrl = `mailto:${emailAddress}`;
    window.open(mailtoUrl);
 }

 const handleInstaClick=()=>{
    const gitHubUrl = 'https://www.instagram.com/pintu_kumar_29/';
    window.open(gitHubUrl, '_blank');
 }
 const handleLinkDinClick=()=>{
    const gitHubUrl = 'https://www.linkedin.com/in/pintu-kumar-46b147204/';
    window.open(gitHubUrl, '_blank');
 }
 const handleTwitterClick=()=>{
    const gitHubUrl = 'https://twitter.com/Pintu_Kumar_24';
    window.open(gitHubUrl, '_blank');
 }

 useEffect(() => {
  AOS.init();
}, []);
    
  return (
    <div>
      <div className="Homedetails d-flex justify-content-between" style={{padding:'50px 60px'}}>
        <div className='information-section' data-aos="fade-up-right"data-aos-duration="1500" 
        style={{color:'#001c55', marginTop:'40px' , width:'50vw', padding:'0 2vw'}}
        >
            <h1 
            className='title-name' 
            style={{fontSize:70}} data-aos="fade-right"data-aos-duration="1000" 

            >Pintu Kumar</h1>
            <p style={{color:'#7f8daa', fontSize:20, fontWeight:'bold', lineHeight:'2'}} data-aos="fade-right"data-aos-duration="1500" data-aos-delay="1000">
            A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
            </p>
            <div className='d-flex 'style={{margin:'40px 0'}}data-aos="fade-right"data-aos-duration="1500" data-aos-delay="2500">
                <div className="text-center mx-2" >
    
                    <img src="Images/github.png" className="rounded-circle" style={{height:'35px', width:'35px', cursor:'pointer'}} alt="..." onClick={handleGitHubClick}/>
                </div>
                <div className="text-center mx-2">
                    <img src="/Images/linkdin.png" className="rounded-circle" style={{height:'35px', width:'35px', cursor:'pointer'}} onClick={handleLinkDinClick} alt="..."/>
                </div>

                <div className="text-center mx-2">
                    <img src="/Images/gmail.png" className="rounded-circle" style={{height:'35px', width:'35px', cursor:'pointer', padding:2}} onClick={handleGmailClick} alt="..."/>
                </div>

                <div className="text-center mx-2">
                    <img src="Images/twitter.png" className="rounded-circle" style={{height:'35px', width:'35px', cursor:'pointer'}} onClick={handleTwitterClick} alt="..."/>
                </div>

                <div className="text-center mx-2">
                    <img src="Images/instagram.jpeg" className="rounded-circle" style={{height:'35px', width:'35px', cursor:'pointer'}} onClick={handleInstaClick} alt="..."/>
                </div>
            </div>
<div className='button-container'data-aos="fade-right"data-aos-duration="1500" data-aos-delay="3000">

            <button type="button" className=" button-hover " onClick={handleGitHubClick}><i className="fa-solid fa-star fa-sm mx-2" style={{color: '#cdb01d'}}></i>Star Me On Github</button>
</div>
        </div>
        <div className='title-image-container mx-2 d-flex justify-content-center align-items-center' data-aos="fade-up-left"data-aos-duration="1500" >
        <img src="Images/landing.jpg" className="title-image  rounded-circle" alt="..." style={{marginTop:'30px', width:'45vw', height:'70vh', padding:0}}/>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
