import Footer from '../../components/Footer';
import './main.css';

function Cover() {
  return (
    <>
      <div className="cover">
        <div className="section-title title-style-two text-center mb-60">
          <span>Byte Builders Labs</span>
          <h2>Welcome to<span className="d-block">Byte Beasts</span></h2>
        </div>
        <div className='px-4 mt-5'>
          <a
            href={`https://x.com/0xByteBeasts`}
            target='_blank'
          >
            <button
              className={'main-button mb-3'}
              disabled={false}
            >Login with your wallet!</button>
          </a>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cover;
