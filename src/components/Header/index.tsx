import WalletConnector from '../WalletConector/index'
import monster from '../../assets/img/logo.jpg';
import './main.css';
import ControllerConnectButton from '../CartridgeController/ControllerConnectButton';

function Header() {

  return (
    <>
      <nav className="navbar">
        <div className='container'>
          <div className="logo d-flex align-items-center mb-2">
            <a href="/"><img src={monster} height="70" alt="Logo" /></a>
            <h2>BYTE <span>BEASTS</span></h2>
          </div>
          <WalletConnector />
          <ControllerConnectButton />
        </div>
      </nav>
    </>
  )
}

export default Header;
