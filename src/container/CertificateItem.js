import React from 'react'

const CertificateItem = (props) => {
   const handleMoreClick=()=>{
        const imageurl=props.imageurl;
        window.open(imageurl, '_blank')
    }
  return (
    <div>
         <div className="card mx-3 my-3" style={{width: '25vw', background:'#edf9fe', borderRadius:15}}>
              <div>
                <div className='marks'>

                     <div className="custom-tooltip" style={{background:'none', color:'#001c55', fontSize:30, top:50,}}>
                      Certificate
                    </div>
                    <img src={props.image} className="card-img-top"  style={{height:'10rem', borderRadius:'15px 15px 0 0', cursor:'pointer', }} alt="..."   onClick={handleMoreClick}/>
                
               </div>
             </div>
                <div className="card-body my-2" style={{textAlign:'center', color:'#001c55', fontSize:20, fontWeight:'bold'}}>
                    <h5 className="card-title">{props.title}</h5>
                    
                </div>
      </div>
    </div>
  )
}

export default CertificateItem
