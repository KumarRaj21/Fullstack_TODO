import React from 'react'

const Cardslist = (props) => {
  return (
    <div className='card'>
        <div className='card-in'>
            <div className='card-1'>
                <div className='card-1-1'>
                  <div className='card-1-1-1'>
                   {props.data.title}
                  </div>
                  <div className='card-1-1-2'>
                    {props.data.des}
                  </div>
                </div>
                <div className='card-1-2'>
                    <p>Progress</p>
                    <div className='progress'>
                      <div style={{
                        height :'100%',
                        width:`${props.data.progress}%`,
                        backgroundColor:'orange',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:"center",
                        borderRadius:'25px'
                      }}>{props.data.progress}%</div>
                  </div>
                        
                </div>
            </div>
            <div className='card-2'>Deadline : {props.data.deadline}</div>
        </div>
    </div>
  )
}

export default Cardslist