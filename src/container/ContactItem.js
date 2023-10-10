import React from 'react'

const ContactItem = () => {

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
        const gitHubUrl = '';
        window.open(gitHubUrl, '_blank');
     }

     const handleResumeClick=()=>{
        const resumeUrl='https://drive.google.com/file/d/164poiHCDq-WMyHqZEN39cB_UZut96yDM/view?usp=sharing'
        window.open(resumeUrl, '_blank');
     }
  return (
    <div>
        <div className="contactme"  style={{padding:'50px  60px'}}>
        <div className="contact d-flex justify-content-between">
            <div className="img d-flex justify-content-center align-items-center" style={{width:'40vw'}}>
           
            <img src="Images/Pintu_Kumar.jpeg" className="img-fluid rounded-circle" alt="..." style={{width:'40vw', height:'80vh', border:'4px solid #001c55 '}}/>

            </div>
          
            <div className="cont d-flex flex-column justify-content-center align-items-center" style={{width:'50vw', paddingLeft:'10vw'}}>
                <h2 className='conatct' style={{color:'#001c55', paddingTop:50, paddingBottom:20 , fontSize:50 }}>
                    Contact Me
                </h2>
                <p style={{color:'#7f8daa', fontSize:20 , lineHeight:'1.5', textAlign:'center'}}>I am available on almost every social media. You can  message me, I will reply within 24 hours. I can help you with FullStack, AI, React, Android, and  Opensource Development.</p>

                <div className="social d-flex justify-content-center">
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
                <button type="button" className="button-hover my-4 " onClick={handleResumeClick}>See My Resume</button>

            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactItem