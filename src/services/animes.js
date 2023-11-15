export const searchAnimes = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
    const json = await response.json()

    const animes = json.data

    return animes?.map(anime => ({
      id: anime.mal_id,
      title: anime.title,
      score: anime.score,
      poster: anime.images.jpg.image_url,
      year: anime.year,
      season: anime.season
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
