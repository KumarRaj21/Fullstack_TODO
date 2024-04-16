import React from 'react'
import Cardslist from './Cardslist'
import {data} from '../Data';
import noitem from '../images/noitem-removebg-preview.png'
const Inprogress = () => {
  return (data.length!==0 )?(<div className='alltaskscontainer'>
  {
    data.map((item,index)=>{
      return (<>
        {item.progress < 100 ? (
          <Cardslist data ={item} key ={index}/>
        ):''
    }
      </>)
      
    })
  }
  </div>
   
  ):(<div className='imgdivtasks'>
  <img src={noitem} alt=''/>
</div>)
}

export default Inprogress