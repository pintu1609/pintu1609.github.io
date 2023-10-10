import React from 'react'

const ProjectItem = (props) => {

    
   const handleProjectClick=()=>{
        const gitUrl=props.link;
        window.open(gitUrl,'_blank')
    }
  return (
    <div>
        <div className="card my-3" style={{borderRadius:15, cursor:'pointer', background:'#a6e1fa', }} onClick={handleProjectClick}>
            
            <div className="card-body d-felx flex-column">
                <h4 className="card-title" style={{color:'#001c55', fontSize:25}} >{props.title}</h4>
                <p className="card-text" style={{color:'#021f57', fontSize:16}}>{props.body.length >220 ? props.body.slice(0, 220)+'...': props.body}</p>
                <div className='d-flex justify-content-between mx-2'>
                    <h6 className='Duration' style={{color:'#8294b1', fontSize:17, width:'15vw'}}> {props.duration}</h6>
                    <div className='d-flex justify-content-end'>
                        
                        {props.image?.map((e,i)=>(

                                <div className='img d-flex ' key={i}>
                                    <div className='marks relative-content' style={{whiteSpace:'nowrap'}}>
                                    <div className='custom-tooltip'>{e.subtitle}</div>

                                    {e.img.length >4 ? e.img.slice(0, 4):e.img}
                                    </div>

                                    
                                </div>
                            
                    ))}
                    
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem
