import React from 'react'
import certificateData from '../Data/CertificateData'
import CertificateItem from './CertificateItem'

const Certificate = () => {
  return (
    <div>
      <div className="certificate" style={{padding:'20px 50px'}}>
        <div className="certificates d-flex flex-column ">

                <h2 className='certi' style={{color:'#001c55', paddingTop:'15vh', paddingBottom:10 , fontSize:35, fontWeight:'bold', textAlign:'center' }}>
                    Certificates
                </h2>
                <div className="certficatesitemdetails " style={{padding:35, }}>
                    <div className="row justify-content-center">
                   {certificateData.map((element)=>{
                       
                          return  <div className="col-md-4" key={element.user_id} style={{justifyContent:'center'}}>
                                     <CertificateItem title={element.title} image={element.image} imageurl={element.imageUrl}/>
                                 </div>
                        
                   })}
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Certificate
