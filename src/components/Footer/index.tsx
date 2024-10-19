import github from '../../assets/img/github-sign.png';
import twitter from '../../assets/img/twitter.png';
import unity from '../../assets/img/unity.png';
import starknet from '../../assets/img/stark.png';
import rolo from '../../assets/img/rol.jpg';
import juan from '../../assets/img/Juan.jpg';
import cox from '../../assets/img/marco.jpeg';
import luis from '../../assets/img/Luis.png';
import daniel from '../../assets/img/daniel.jpeg';

import './main.css';

function Footer() {
  return (
    <>
      <div className='team mt-5 mb-4'>
        <a href='https://github.com/RolandoDrRobot' target='_blank'>
          <img src={rolo} className='footer-team' />
        </a>
        <a href='https://github.com/juandiegocv27' target='_blank'>
          <img src={juan} className='footer-team' />
        </a>
        <a href='https://github.com/coxmars' target='_blank'>
          <img src={cox} className='footer-team' />
        </a>
        <a href='https://github.com/jimenezz22' target='_blank'>
          <img src={luis} className='footer-team' />
        </a>
        <a href='https://github.com/danielcdz' target='_blank'>
          <img src={daniel} className='footer-team' />
        </a>
      </div>
      <div className="footer mb-3">
        <a href='https://github.com/orgs/ByteBuildersLabs/repositories' target='_blank'>
          <img src={github} className='footer-logo' />
        </a>
        <a href='https://x.com/0xByteBeasts' target='_blank'>
          <img src={twitter} className='footer-logo' />
        </a>
        <a href='https://unity.com/' target='_blank'>
          <img src={unity} className='footer-logo' />
        </a>
        <a href='https://www.starknet.io/' target='_blank'>
          <img src={starknet} className='footer-logo' />
        </a>
        <a href='https://www.dojoengine.org/' target='_blank'>
          <img src='https://book.dojoengine.org/dojo-logo.svg' height={18} />
        </a>
      </div>
    </>
  )
}

export default Footer;
