import React from 'react'

const Signup = () => {
  return (
    <div className='Signup-container'>
        <div className='signup-head'>
            Create An Account
        </div>
        <div className='signup-form'>
            <form action=''>
                <input type='text' placeholder='Username'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm Password'/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup