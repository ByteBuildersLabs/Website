import stakeIcon from '../../assets/img/greenorb.gif';
import dragon from '../../assets/img/dragon.png';
import MintPromo from '../MintPromo';
import { Link } from "react-router-dom";
import './main.css';

function MintBeast() {
  return (
    <>
      <div className="new-contract">
        <div className="new-contract-box section-tab yellow-border pt-3">
          <div className="product-tag">
            <span>1st Generation</span>
          </div>
          <div className='d-flex align-items-center mb-2'>
            <div className='col-9'>
              <p className={'title'}>
                Get ready to meet the first generation beasts!
                <span> Discover the incredible powers and unique abilities of these mythical creatures</span>
              </p>
            </div>
            <div className='col-3 d-flex justify-content-end'>
              <img className="section-tab-pet" src={stakeIcon} alt="" />
            </div>
          </div>
          <div>
            <p className={'subtitle'}>
              The mint of the first beasts is still beta a non official yet, we are working hard to make it official soon. Visit our roadmap
            </p>
          </div>
          <div className="new yellow-border mb-4">
            <img src={dragon} alt="" />
          </div>
          <MintPromo />
          {

            <Link to={`/nftmint/mysticAnimals`}>
              <button
                className={'main-button mb-3'}
                disabled={true}
              >Mint Byte Beast</button>
            </Link>
          }
          <p className={'subtitle text-center'}>
            This is a work in progress. Official Mint is coming soon
          </p>
        </div>
      </div>
    </>
  )
}

export default MintBeast;
