import React from 'react'
import noitem from '../images/noitem-removebg-preview.png';
import Cards from './Cards/Cards';
import {data} from '../Data'
const Alltasks = (props) => {
  return (data.length!==0 )?(<div className='alltaskscontainer'>
    {
      data.map((item,index)=>{
        return <Cards data={item} key ={index}/> 
      })
    }
   
    </div>
  ):(<div className='imgdivtasks'>
     <img src={noitem} alt='Error in Loading'/>
   </div>)
}

export default Alltasks