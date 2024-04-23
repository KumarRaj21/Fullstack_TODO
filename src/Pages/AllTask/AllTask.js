import React from 'react';
import "./AllTask.css";
import Cards from '../../components/Cards/Cards';
import { data } from '../../Data';
function AllTask() {
  return (
    <div className='allTask'>
      {
        data.map((item,index)=>{
            return <Cards item={item} index={index} key={index}/>
        })
      }
    </div>
  )
}

export default AllTask
