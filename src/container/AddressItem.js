import React from 'react'

const AddressItem = () => {
    const handleAddressClick=()=>{
        const latitude = '28.705240';
    const longitude = '77.214073';

    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(googleMapsUrl, '_blank');

    }
  return (
    <div>
        <div className="address" style={{padding:'0 60px', paddingBottom:50}}>
            <div className="add d-flex justify-content-between">
                <div className="img" style={{}}>
                <img src="Images/address.png" className="img-fluid rounded" alt="..." style={{width:'40vw', height:'50vh'}}/>

                </div>

                <div className="content d-flex flex-column justify-content-center align-items-center" style={{width:'50vw', paddingLeft:'10vw'}}>
                <h2 className='conatct' style={{color:'#001c55', paddingTop:10, paddingBottom:10 , fontSize:30 }}>
                    Address
                </h2>

                <p style={{color:'#7f8daa', fontSize:20 , lineHeight:'1.5', textAlign:'center', fontWeight:'bold'}}>333, 1st Floor, Indra Vihar, Mukherjee Nagar, New Delhi-110009</p>
                <button type="button" className="button-hover my-2 " onClick={handleAddressClick}>Visit On Google Map</button>

                </div>

            </div>

        </div>

    </div>
  )
}

export default AddressItem