import React from 'react'
import WorkIntershipItem from './WorkIntershipItem'
import internship from '../Data/IntershipData'
import work from '../Data/WorkData'
const Work = () => {

        
    
  return (
    <div>
        <div className="work" style={{padding:'10px 60px', paddingBottom:60}}>

        
      <div className="accordion" id="accordionExample">
     
      <div className="accordion-item my-3">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{fontSize:20, color:'#001c55', background:'#cfe2ff'}}>
                Work
            </button>
            </h2>
            
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body " style={{background:'#edf9fe' }}>

                <div className="row">
                         { work.length > 0 ?  work.map((element)=>{
                            return <div className="col-md-12" key={element.user_id} style={{justifyContent:'center'}}>

                                <WorkIntershipItem image={element.image} title={element.title} company={element.company} duration={element.duration} location={element.location} body={element.body}/>
                            </div>
                        }):(
                            <div style={{fontSize:30, textAlign:'center', fontWeight:'bold', color:'#001c55'}}> Updated Soon</div>
                        )}
                    </div>


                </div>
            </div>
        </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{fontSize:20, color:'#001c55', background:'#cfe2ff'}}>
        Internship
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background:'#edf9fe' }}>
        <div className="row">
            {internship.map((element)=>{
                return <div className="col-md-12" key={element.user_id} style={{justifyContent:'center'}}>

                    <WorkIntershipItem image={element.image} title={element.title} company={element.company} duration={element.duration} location={element.location} body={element.body}/>
                </div>
            })}
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
    </div>
  )
}

export default Work
