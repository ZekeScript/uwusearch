import { useState } from 'react'
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useAnimes ({ search }) {
  const [responseAnimes, setResponseAnime] = useState([])
  const animes = responseAnimes.data

  const mappedAnimes = animes?.map(anime => ({
    id: anime.mal_id,
    title: anime.title,
    score: anime.score,
    poster: anime.images.jpg.image_url,
    year: anime.year,
    season: anime.season
  }))

  const getMovies = () => {
    if (search) {
      setResponseAnime(withResults)
    } else {
      setResponseAnime(withoutResults)
    }
  }

  return { animes: mappedAnimes, getMovies }
}
