import searchAnime from "../assets/icons8-anime-64.png";

const SearchNav = ({ setCharacter }) => {
  const fetchAnime = (event) => {
    event.preventDefault();

    fetch("https://animechan.xyz/api/random")
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res);
        console.log(res);
      });
  };

  return (
    <nav>
      <div>
        <button type="submit" onClick={fetchAnime}>
          <img src={searchAnime} alt="Anime Button" className="anime-button" />
          <br/>
          <span style={{ color: 'black' }}>Click Me!</span>
        </button>
      </div>
    </nav>
  );
};

export default SearchNav;
