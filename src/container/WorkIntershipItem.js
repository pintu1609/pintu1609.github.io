import React from 'react'
import '../responsivecss/WorkInternshipItem.css'

const WorkIntershipItem = (props) => {
  return (
    <div>
      <div className="card my-3" style={{color:'#001c55'}}>
            <div className='work-content d-flex'>
                <div className="company-logo d-flex align-items-center mx-2">
                    <img src={props.image} className="company-img-top rounded-circle"  style={{width:70, height:70}} alt="..."/>
                </div>
                    <div className="card-work">
                        <div className='work-detail d-flex justify-content-between  my-2' >
                        <div className='d-flex flex-column'>
                            <h4 className="work-title">{props.title}</h4>
                        <h6 className='work-subtitle'> {props.company}</h6>

                        </div>
                    <div className='d-flex flex-column' style={{textAlign:'center'}}>
                    <h6 className='work-year'> {props.duration}</h6>
                    <h6 className='work-location'> {props.location}</h6>
                    </div>
                    </div>
                    <p className="work-text " style={{fontSize:17}}>{props.body}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default WorkIntershipItem
