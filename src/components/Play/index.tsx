import coinIcon from '../../assets/img/orb.gif';
import fight from '../../assets/img/fight.jpg';
import './main.css';

function Play() {
  return (
    <>
      <div className="new-contract">
        <div className="new-contract-box section-tab yellow-border">
          <div className='d-flex align-items-center mt-4 mb-2'>
            <div className='col-9'>
              <p className={'title'}>
                Here is our current work
                <span> Explore the map and find a surprise in the woods</span>
              </p>
            </div>
            <div className='col-3 d-flex justify-content-end'>
              <img className="section-tab-pet" src={coinIcon} alt="" />
            </div>
          </div>
          <div>
            <p className={'subtitle'}>
              The mint of the first beasts is still beta a non official yet, we are working hard to make it official soon. Visit our roadmap
            </p>
          </div>
          <div className="new yellow-border mb-4">
            <img src={fight} alt="" />
          </div>
          <a 
            href={`https://byte-beasts-deploy.vercel.app/`}
            target='_blank'
          >
            <button
              className={'main-button mb-3'}
              disabled={false}
            >Test Byte Beasts</button>
          </a>
          <p className={'subtitle text-center mb-5'}>
            It takes a bit to load, but it's worth it!
          </p>
        </div>
      </div>
    </>
  )
}

export default Play;
