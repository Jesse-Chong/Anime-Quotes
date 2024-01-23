const Mains = ({ character }) => {
    return (
        <main className={character ? 'anime holographic-border' : 'anime'}>
        {character ? (
          <div>
            <h2>Anime Title: {character.anime}</h2>
            <h3>Name: {character.character}</h3>
            <h3>Quote: {character.quote}</h3>
          </div>
        ) : null}
      </main>
    )
}

export default Mains;