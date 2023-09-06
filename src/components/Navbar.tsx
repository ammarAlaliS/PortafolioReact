import './navbar.css';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='container'>
      <div className='insideContainer'>
        <div className='socialMedia'>
          <ul>
            <li><a className='facebook' href=""><FaFacebook /></a></li>
            <li><a className='insta' href=""><AiOutlineInstagram /></a></li>
            <li><a className='git' href=""><AiFillGithub /></a></li>
          </ul>
        </div>
        <div className='links'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Project</a></li>
          <li><a href="" className='logginButton'>Loggin</a></li>
        </div>
      </div>
    </div>
  )
}

export default Navbar