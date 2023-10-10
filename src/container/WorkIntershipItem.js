import React from 'react'

const WorkIntershipItem = (props) => {
  return (
    <div>
      <div className="card" style={{color:'#001c55'}}>
            <div className='content d-flex'>
                <div className="image d-flex align-items-center mx-2">
                    <img src={props.image} className="card-img-top rounded-circle"  style={{width:70, height:70}} alt="..."/>
                </div>
                    <div className="card-body">
                        <div className='d-flex justify-content-between  my-2' >
                        <div className='d-flex flex-column'>
                            <h4 className="card-title">{props.title}</h4>
                        <h6 className='subtitle'> {props.company}</h6>

                        </div>
                    <div className='d-flex flex-column' style={{textAlign:'center'}}>
                    <h6 className='year'> {props.duration}</h6>
                    <h6 className='location'> {props.location}</h6>
                    </div>
                    </div>
                    <p className="card-text " style={{fontSize:17}}>{props.body}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default WorkIntershipItem
