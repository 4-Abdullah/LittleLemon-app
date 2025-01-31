import { Link } from "react-router-dom";
import Logo from '../Asset 14@4x.png';

const Nav=()=>{

    const cardData={ a:"First card's h2", b:"First card's h3"}
    const handleClick=(anchor)=>(event)=>{
      event.preventDefault();
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        }
    }
    return(
        <nav>
            <ul>
            <li><Link to="/"><img src={Logo} alt='Logo' width={150} height={30}></img></Link></li>
            <li><Link className='nav-link' to="/">Home</Link></li>
            <li >
                <Link className='nav-link'  to="/#About" onClick={handleClick('About')}>About</Link>
            </li> 
            <li><Link className='nav-link' to="/Card" state={cardData}>Menu</Link></li>
            <li><Link className='nav-link' to="/Bookingform" >Reservations</Link></li>
            <li><Link className='nav-link' to="/Goals">Order online</Link></li>
            <li><Link className='nav-link' to="/About">Login</Link></li>
            </ul>
        </nav>
     )
} 

export default Nav
