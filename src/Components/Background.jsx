import backgroundVideo from '../assets/Cyberpunk Room Background.mp4'
import './Background.css'

const Background = () => {
    return (
        <div>
          <video autoPlay muted loop className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
}

export default Background;