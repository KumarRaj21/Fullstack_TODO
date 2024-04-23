import React from 'react'
import {data} from '../Data'
import Cards from './Cards/Cards'
import noitem from '../images/noitem-removebg-preview.png'
const Done = () => {
  return (data.length!==0 )?
    (<div className='alltaskscontainer'>
  {
    data.map((item,index)=>{
      return (<>
        {item.progress === 100 ? ( <Cards data ={item} key ={index}/>):''
    }
      </>)
      
    })
  }
  </div>
   
  ):(<div className='imgdivtasks'>
  <img src={noitem} alt=''/>
</div>)
}

export default Done