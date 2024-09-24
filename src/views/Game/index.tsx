import Play from '../../components/Play';
import RoadmapMonth from '../../components/RoadmapMonth';
import './main.css';

function Game() {
  return (
    <>
      <div className="game">
        <div className="section-title title-style-two text-center mb-60">
          <span>Byte Builders Labs</span>
          <h2>Play Byte Beasts<span className="d-block">Save the middle earth</span></h2>
        </div>
        <Play />
        <RoadmapMonth
          completed={false}
          title="Latest Updates"
          title2="Dojo Residency Program - August & September 2024"
          subtitle1="Re built the Dojo Backend with latest version dojo 1.0.5, now we have the necessary contracts to handle the bag, items, the battle, the sessions and the Byte Beasts"
          subtitle2="Reinvented the existing open world to show the concept of Byte Beasts aims to be, come to explore!"
          subtitle3="We created a gamplay demo playable right now!"
          subtitle4="🐲 Finish the game and discover the secret spell! You can mint an NFT If you know  It, This NFT will come handy in the future! 👑"
        />
        <div className='px-4 mt-5'>
          <a
            href={`https://x.com/0xByteBeasts`}
            target='_blank'
          >
            <button
              className={'main-button mb-3'}
              disabled={false}
            >Stay update with latest here!</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Game;
