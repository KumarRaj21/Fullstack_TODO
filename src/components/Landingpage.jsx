import React from 'react'
import { NavLink} from 'react-router-dom';
const Landingpage = () => {
  return (
    (<div className='App-container-2'>
      <div className='app-container-2-head'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <div className='app-container-2-body'>
        <div className='app-container-2-1'>
        <div className='app-container-2-1-head'>
          TO-DO LIST
        </div>
        <div className='app-container-2-1-content'>Login to add your daily tasks</div>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <div className='app-container-2-2'>
      </div>
    </div>
      </div>
      )
  )
}

export default Landingpage