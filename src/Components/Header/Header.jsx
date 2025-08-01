import logo from '../../assets/logo.png';
import github from '../../assets/icon_github.png';
import insta from '../../assets/icon_insta.png';
import linkedin from '../../assets/icon_linkedin.png';
import "./header.css"

function Header() {

  return (
    <>
      <div className='container_total'>
        <div className='container_logo_navbar'>
          <img src={logo} className='logo'></img>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </div>
        <div className='container_icons'>
          <img src={linkedin} alt="rede social linkedin" id='lkd'/>
          <img src={github} alt="rede social github"/>
          <img src={insta} alt="rede social insta"/>
        </div> 

      </div>
    </>
  )
}

export default Header
