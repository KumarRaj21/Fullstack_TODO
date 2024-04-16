import Dropdown from 'react-bootstrap/Dropdown';
import profile from '../images/me.jpg'
function PrDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={profile} alt=''/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PrDropdown;