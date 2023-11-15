import { useState } from 'react'
import { searchAnimes } from '../services/animes'

export function useAnimes ({ search }) {
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(true)
      const newAnimes = await searchAnimes({ search })
      setAnimes(newAnimes)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { animes, getMovies, loading, error }
}
