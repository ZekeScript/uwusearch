import responseAnimes from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useAnimes () {
  const animes = responseAnimes.data

  const mappedAnimes = animes?.map(anime => ({
    id: anime.mal_id,
    title: anime.title,
    score: anime.score,
    poster: anime.images.jpg.image_url,
    year: anime.year,
    season: anime.season
  }))

  return { animes: mappedAnimes }
}
