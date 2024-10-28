import nftIcon from '../../assets/img/purpleorb.gif';
import dragon2 from '../../assets/img/logo.jpg';

function RoadmapStep() {
  return (
    <div className="new-contract-box section-tab yellow-border mt-4">
      <div className='d-flex align-items-center mb-2'>
        <div className='col-9'>
          <p className={'title'}>
          <span className='d-block'>Byte Beasts is a old school píxel art RPG that combines NFTs, adventures and strategic combat</span> 
            Unity + Dojo Engine + Mobile First + Píxel Art
          </p>
        </div>
        <div className='col-3 d-flex justify-content-end'>
          <img className="section-tab-pet" src={nftIcon} alt="" />
        </div>
      </div>
      <div className="new yellow-border mt-4">
        <img src={dragon2} alt="" />
      </div>
    </div>
  )
}

export default RoadmapStep;
