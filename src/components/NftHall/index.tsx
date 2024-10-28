import rewardPic from '../../assets/img/vault.gif';
import NftVault from '../NftVault';
import './main.css';

function NftHall() {

  return (
    <>
      {<>
        <div className="nft-box section-tab yellow-border p-0">
          <div className="d-flex align-items-center">
            <div className="col-8">
              <p className='title px-4'>
                This is your vault <span>Your Byte Beasts live here</span> You'll see It here
              </p>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <img src={rewardPic} className="section-tab-pet" alt="" />
            </div>
          </div>
          <div className="collection row mt-0">
            <NftVault/>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default NftHall;
