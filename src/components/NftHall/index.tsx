import rewardPic from '../../assets/img/vault.gif';
import './main.css';

function NftHall() {

  return (
    <>
      {<>
        <div className="nft-box section-tab yellow-border">
          <div className="d-flex align-items-center">
            <div className="col-8">
              <p className={'title'}>
                This is your vault <span>Your Byte Beasts live here</span> You'll see It here
              </p>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <img src={rewardPic} className="section-tab-pet" alt="" />
            </div>
          </div>
          <div className="collection row">
          </div>
          <div className="collection row">
          </div>
        </div>
      </>
      }
    </>
  )
}

export default NftHall;
