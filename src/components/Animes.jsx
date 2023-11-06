function ListOfAnimes ({ animes }) {
  return (
    <ul>
      {
        animes.map(anime => (
          <li key={anime.id}>
            <h3>{anime.title}</h3>
            <p>Score: {anime.score}</p>
            <img src={anime.poster} alt={anime.title} />
            <p>Year: {anime.season} {anime.year}</p>
          </li>
        ))
      }
    </ul>
  )
}

function NoResults () {
  return (
    <p>No se encontraron coincidencias</p>
  )
}

export function Animes ({ animes }) {
  const hasAnimes = animes?.length > 0

  return (
    hasAnimes
      ? <ListOfAnimes animes={animes} />
      : <NoResults />
  )
}
