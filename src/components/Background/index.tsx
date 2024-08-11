import video from '../../assets/img/fire.mp4';
import './main.css';

function Background() {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-content"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
