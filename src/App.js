import { NavLink, Route, Routes } from 'react-router-dom';
// import todolist from './images/todolist4-removebg-preview.png'
import me from './images/me.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import Alltasks from './components/Alltasks'
import Done from './components/Done';
import Inprogress from './components/Inprogress';
import Todo from './components/Todo';
import './App.css';
import { useState } from 'react';
import Addtask from './components/Addtask';
import Login from './components/Login';
import Landingpage from './components/Landingpage';
function App() {
  const [isdarkmode, setisdarkmode] = useState(false);
  const [btnpopup, setbtnpopup] = useState(false);
  const [tasklist, settasklist] = useState([]);
  const [user,setuser] = useState(false);
  return (user?(<div className='App-container'>
      <div className={isdarkmode ? 'dark' : 'light'}>
        <div className='App-left'>
          <div className='App-left-1'>
            <div className='app-left-head'>
              <h2>Tasks</h2>
              {isdarkmode ? <svg onClick={() => setbtnpopup(!btnpopup)} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="white" fill-opacity="0.08" />
                <g opacity="0.4">
                  <path d="M18 14L10 14" stroke="white" stroke-width="2" stroke-linecap="round" />
                  <path d="M14 18L14 10" stroke="white" stroke-width="2" stroke-linecap="round" />
                </g>
              </svg>
                : <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setbtnpopup(!btnpopup)}>
                  <circle cx="14" cy="14" r="14" fill="#1C1D22" fill-opacity="0.08" />
                  <g opacity="0.4" >
                    <path d="M18 14L10 14" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" />
                    <path d="M14 18L14 10" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" />
                  </g>
                </svg>}
            </div>
            <div className='app-left-body'>
              <NavLink to='/'>All tasks</NavLink>
              <NavLink to='/inprogress'>In Progress</NavLink>
              <NavLink to='/todo'>To do</NavLink>
              <NavLink to='/done'>Done</NavLink>
            </div>

          </div>
          <div className='app-left-2'>
            <button onClick={() => setisdarkmode(!isdarkmode)}>{isdarkmode ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        </div>
        <div className='App-right'>
          <div className='app-right-head'>
            <div className='app-right-head-1'>
              <div className='app-right-head-1-1'>Welcome Kumar ! 👋</div>
              <div className='app-right-head-1-2'>
                {isdarkmode ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.16671 2.66671C5.12914 2.66671 2.66671 5.12914 2.66671 8.16671C2.66671 11.2043 5.12914 13.6667 8.16671 13.6667C11.2043 13.6667 13.6667 11.2043 13.6667 8.16671C13.6667 5.12914 11.2043 2.66671 8.16671 2.66671ZM0.833374 8.16671C0.833374 4.11662 4.11662 0.833374 8.16671 0.833374C12.2168 0.833374 15.5 4.11662 15.5 8.16671C15.5 9.86136 14.9252 11.4218 13.9599 12.6635L18.8982 17.6019C19.2562 17.9598 19.2562 18.5402 18.8982 18.8982C18.5402 19.2562 17.9598 19.2562 17.6019 18.8982L12.6635 13.9599C11.4218 14.9252 9.86136 15.5 8.16671 15.5C4.11662 15.5 0.833374 12.2168 0.833374 8.16671Z" fill="white" />
                </svg> : <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.77696 3.66667C6.58961 3.66667 4.00576 6.1291 4.00576 9.16667C4.00576 12.2042 6.58961 14.6667 9.77696 14.6667C12.9643 14.6667 15.5482 12.2042 15.5482 9.16667C15.5482 6.1291 12.9643 3.66667 9.77696 3.66667ZM2.08203 9.16667C2.08203 5.11658 5.52717 1.83333 9.77696 1.83333C14.0267 1.83333 17.4719 5.11658 17.4719 9.16667C17.4719 10.8613 16.8687 12.4217 15.8558 13.6635L21.0376 18.6018C21.4133 18.9598 21.4133 19.5402 21.0376 19.8982C20.662 20.2562 20.053 20.2562 19.6773 19.8982L14.4955 14.9599C13.1925 15.9252 11.5552 16.5 9.77696 16.5C5.52717 16.5 2.08203 13.2168 2.08203 9.16667Z" fill="#1C1D22" />
                </svg>
                }
                {isdarkmode ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M9.30063 2.97748C9.57303 2.30652 10.2313 1.83337 11 1.83337C11.7687 1.83337 12.427 2.30652 12.6994 2.97748C15.4185 3.72236 17.4167 6.21119 17.4167 9.16671V13.4725L19.096 15.9916C19.2836 16.2729 19.3011 16.6345 19.1415 16.9326C18.982 17.2306 18.6714 17.4167 18.3333 17.4167H14.1758C13.9534 18.9715 12.6163 20.1667 11 20.1667C9.3837 20.1667 8.04656 18.9715 7.82416 17.4167H3.66667C3.32861 17.4167 3.01798 17.2306 2.85847 16.9326C2.69895 16.6345 2.71643 16.2729 2.90396 15.9916L4.58333 13.4725V9.16671C4.58333 6.21119 6.58151 3.72236 9.30063 2.97748ZM9.70324 17.4167C9.892 17.9508 10.4013 18.3334 11 18.3334C11.5987 18.3334 12.108 17.9508 12.2968 17.4167H9.70324ZM11 4.58337C8.4687 4.58337 6.41667 6.6354 6.41667 9.16671V13.75C6.41667 13.931 6.3631 14.1079 6.26271 14.2585L5.37948 15.5834H16.6205L15.7373 14.2585C15.6369 14.1079 15.5833 13.931 15.5833 13.75V9.16671C15.5833 6.6354 13.5313 4.58337 11 4.58337Z" fill="white" />
                  </g>
                  <circle cx="17" cy="5" r="3.5" fill="#FFA048" stroke="#2A2B2F" />
                </svg>
                  : <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0871 2.97744C10.373 2.30648 11.0636 1.83333 11.8703 1.83333C12.6769 1.83333 13.3676 2.30648 13.6535 2.97744C16.5066 3.72232 18.6034 6.21114 18.6034 9.16667V13.4725L20.3655 15.9915C20.5623 16.2728 20.5807 16.6345 20.4133 16.9325C20.2459 17.2306 19.92 17.4167 19.5652 17.4167H15.2027C14.9694 18.9715 13.5663 20.1667 11.8703 20.1667C10.1743 20.1667 8.77122 18.9715 8.53786 17.4167H4.17537C3.82064 17.4167 3.4947 17.2306 3.32732 16.9325C3.15993 16.6345 3.17828 16.2728 3.37505 15.9915L5.13723 13.4725V9.16667C5.13723 6.21114 7.23394 3.72232 10.0871 2.97744ZM10.5096 17.4167C10.7077 17.9507 11.2421 18.3333 11.8703 18.3333C12.4985 18.3333 13.0329 17.9507 13.231 17.4167H10.5096ZM11.8703 4.58333C9.21417 4.58333 7.06097 6.63536 7.06097 9.16667V13.75C7.06097 13.931 7.00476 14.1079 6.89942 14.2585L5.97263 15.5833H17.768L16.8412 14.2585C16.7358 14.1079 16.6796 13.931 16.6796 13.75V9.16667C16.6796 6.63536 14.5264 4.58333 11.8703 4.58333Z" fill="#1C1D22" />
                    <path d="M18.1661 8.5C20.1579 8.5 21.814 6.9554 21.814 5C21.814 3.0446 20.1579 1.5 18.1661 1.5C16.1744 1.5 14.5182 3.0446 14.5182 5C14.5182 6.9554 16.1744 8.5 18.1661 8.5Z" fill="#FFA048" stroke="white" />
                  </svg>}
                {isdarkmode ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M8.25 1.83337C8.75626 1.83337 9.16667 2.24378 9.16667 2.75004V3.66671H12.8333V2.75004C12.8333 2.24378 13.2437 1.83337 13.75 1.83337C14.2563 1.83337 14.6667 2.24378 14.6667 2.75004V3.66671H17.4167C18.4292 3.66671 19.25 4.48752 19.25 5.50004V17.4167C19.25 18.4292 18.4292 19.25 17.4167 19.25H4.58333C3.57081 19.25 2.75 18.4292 2.75 17.4167V5.50004C2.75 4.48752 3.57081 3.66671 4.58333 3.66671H7.33333V2.75004C7.33333 2.24378 7.74374 1.83337 8.25 1.83337ZM7.33333 5.50004H4.58333V8.25004H17.4167V5.50004H14.6667V6.41671C14.6667 6.92297 14.2563 7.33337 13.75 7.33337C13.2437 7.33337 12.8333 6.92297 12.8333 6.41671V5.50004H9.16667V6.41671C9.16667 6.92297 8.75626 7.33337 8.25 7.33337C7.74374 7.33337 7.33333 6.92297 7.33333 6.41671V5.50004ZM17.4167 10.0834H4.58333V17.4167H17.4167V10.0834Z" fill="white" />
                  </g>
                </svg>
                  : <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.15425 1.83333C9.68547 1.83333 10.1161 2.24374 10.1161 2.75V3.66667H13.9636V2.75C13.9636 2.24374 14.3942 1.83333 14.9254 1.83333C15.4567 1.83333 15.8873 2.24374 15.8873 2.75V3.66667H18.7729C19.8354 3.66667 20.6966 4.48748 20.6966 5.5V17.4167C20.6966 18.4292 19.8354 19.25 18.7729 19.25H5.30679C4.24434 19.25 3.38306 18.4292 3.38306 17.4167V5.5C3.38306 4.48748 4.24434 3.66667 5.30679 3.66667H8.19238V2.75C8.19238 2.24374 8.62303 1.83333 9.15425 1.83333ZM8.19238 5.5H5.30679V8.25H18.7729V5.5H15.8873V6.41667C15.8873 6.92293 15.4567 7.33333 14.9254 7.33333C14.3942 7.33333 13.9636 6.92293 13.9636 6.41667V5.5H10.1161V6.41667C10.1161 6.92293 9.68547 7.33333 9.15425 7.33333C8.62303 7.33333 8.19238 6.92293 8.19238 6.41667V5.5ZM18.7729 10.0833H5.30679V17.4167H18.7729V10.0833Z" fill="#1C1D22" />
                  </svg>}
                <p>06-04-24</p>
                <div className='app-right-profile'>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img src={me} alt='' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className='app-right-head-2'>
              <div className='app-right-head-2-1'>
              </div>
              <div className='app-right-head-2-2'>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <b>Filter</b>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All Tasks</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Done</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <p>Sort</p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">A - Z</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Deadline</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className='app-right-body'>
            <Routes>
              <Route path='/' element={<Alltasks tasklist={tasklist} settasklist={settasklist} />} />
              <Route path='/inprogress' element={<Inprogress tasklist={tasklist} settasklist={settasklist} />} />
              <Route path='/todo' element={<Todo tasklist={tasklist} settasklist={settasklist} />} />
              <Route path='/done' element={<Done tasklist={tasklist} settasklist={settasklist} />} />
            </Routes>
          </div>
        </div>
      </div>
      <Addtask trigger={btnpopup} settrigger={setbtnpopup} />
    </div>):(
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    )

  );
}

export default App;
