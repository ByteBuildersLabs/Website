import { Link } from "react-router-dom";
import nftIcon from "../../assets/img/purpleorb.gif";
import investIcon from "../../assets/img/orb.gif";
import stakeIcon from "../../assets/img/greenorb.gif";
import "./main.css";

function Navbar() {
  return (
    <>
      <div className="navbar-bottom">
        <div className="container d-flex">
          <Link to="/nftroom" className="button">
            <img src={stakeIcon} alt="" />
            Mint Beast
          </Link>
          <Link to="/game" className="button">
            <img src={investIcon} alt="" />
            Play Game
          </Link>
          <Link to="/roadmap" className="button">
            <img src={nftIcon} alt="" />
            Roadmap
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
