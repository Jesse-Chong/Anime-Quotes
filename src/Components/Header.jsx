import kakashi from '../assets/kakashi.gif'
import ichigo from '../assets/ichigo.gif'
import samuraiGirl from '../assets/samurai-girl.gif'

const Header = () => {
    return (
        <header className="header-container">
            <img className="kakashi"
            src={kakashi}
            alt="Anime gif"
            />
            <img className="ichigo"
            src={ichigo}
            alt="Anime gif 2"
            />
            <img className="samuraiGirl"
            src={samuraiGirl}
            alt="Anime gif 3"
            />
        </header>
    );
};

export default Header;