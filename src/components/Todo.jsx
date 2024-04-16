import React from 'react'
import Cardslist from './Cardslist';
import noitem from '../images/noitem-removebg-preview.png'
import {data} from '../Data'
const Todo = () => {
  return (data.length!==0 )?(<div className='alltaskscontainer'>
    {
      data.map((item,index)=>{
        return <Cardslist data={item} key ={index}/> 
      })
    }
   
    </div>
  ):(<div className='imgdivtasks'>
     <img src={noitem} alt=''/>
   </div>)
}
export default Todo